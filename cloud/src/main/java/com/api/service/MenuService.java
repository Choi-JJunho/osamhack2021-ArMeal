package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.xml.crypto.Data;

import com.api.domain.DailyMeal;
import com.api.domain.Ingredient;
import com.api.domain.Menu;
import com.api.domain.SelfDish;
import com.api.mapper.MenuMapper;
import com.api.mapper.RatingMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
@Transactional
public class MenuService extends Exception {
    @Autowired
    MenuMapper menuMapper;

    @Autowired
    RatingMapper ratingMapper;

    public HashMap<Object,Object> addMenu(String name, int type, long groupId) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name, groupId);

        if(menu != null) {
            result.put("error", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addMenu(name, type, groupId);
            switch(type) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 메인 메뉴로 추가되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 자율 메뉴로 추가되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 후식으로 추가되었습니다.");
                    break;
            }
        }
        
        return result;
    }

    // 메뉴의 타입을 수정
    public HashMap<Object,Object> editMenu(String name, int type, long group_id) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name, group_id);

        if(menu == null) {
            result.put("error", "존재하지 않는 메뉴입니다.");
        } else {
            menuMapper.updateMenuType(name, type, group_id);
            switch(type) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 메인 메뉴로 수정되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 자율 메뉴로 수정되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 후식으로 수정되었습니다.");
                    break;
            }
        }

        return result;
    }

    public void updateMenuScore(int id, long group_id) {
        menuMapper.updateMenuScore(id, group_id);
    }

    public List<HashMap<String, Object>> getAllMenu(long group_id) {
        return menuMapper.findAllMenu(group_id);
    }

    public Menu getMenu(long id, long groupId) {
        return menuMapper.findMenuById(id, groupId);
    }

    public List<HashMap<String, Object>> searchMenu(String name, long group_id) {
        return menuMapper.searchMenu(name, group_id);
    }

    // 일일 메뉴를 설정한다.
    // time 1 : 조식 / 2 : 중식 / 3 : 석식
    public HashMap<String, Object> addDailyMenu(DailyMeal menu){
        HashMap<String, Object> result = new HashMap<>();
        Menu flag = menuMapper.findMenuById(menu.getMenu(), menu.getGroup_id());

        if(flag != null) {
            result.put("error", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
            result.put("message", "추가되었습니다.");
        }
        return result;
    }

    // 일일 메뉴를 수정한다.
    public void updateDailyMenu(DailyMeal menu){
        menuMapper.updateDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
    }

    // 한달치 메뉴를 가져온다.
    public List<HashMap<String, Object>> getDailyMenu(long groupNum, String year, String month, int time) {
        String start = year+"-"+month+"-"+"01";
        Date date = Date.valueOf(start);
        return menuMapper.findMonthMenu(groupNum, date, time);
    }

    public HashMap<String, Object> getRecentDate(long menuId, long group_id) {
        return menuMapper.findRecentDateByMenuId(menuId, group_id);
    }

    // TODO : 날짜 중복 문제, 이름 중복문제
    public HashMap<String, Object> addSelfDish(String name, Date date, long ingredientId, long group_id) {
        HashMap<String, Object> result = new HashMap<>();
        if(menuMapper.findSelfDish(name, date, group_id) == null) {
            menuMapper.addSelfDish(name, date, group_id);
            menuMapper.addUsedIngredientSelfdish(Long.valueOf(menuMapper.findSelfDish(name, date, group_id).get("id").toString()), ingredientId);
            result = menuMapper.findSelfDish(name, date, group_id);
        } else {
            result.put("error", "해당 메뉴가 이미 존재합니다.");
        }
        
        return result;
    }
    

    // 메뉴에 해당하는 재료 추가 (관계 맺기)
    public List<HashMap<String, Object>> addUsedIngredient(long menuId, String name) {
        if(menuMapper.findIngredientByname(name) == null) {
            menuMapper.addIngredient(name);
        }
        long ingredientId = Long.valueOf(menuMapper.findIngredientByname(name).get("id").toString());
        if(menuMapper.findUsedIngredientsByMenuIdIngredientId(ingredientId, menuId) == null) {
            menuMapper.addUsedIngredient(menuId, ingredientId);
        }
        
        return getIngredientsByMenuId(menuId);
    }

    // 모든 재료들을 가져온다.
    public List<HashMap<String, Object>> getAllIngredients() {
        return menuMapper.findAllIngredient();
    }

    // 해당 메뉴에 들어가는 재료 구하기
    public List<HashMap<String, Object>> getIngredientsByMenuId(long menuId) {
        return menuMapper.findIngredientsByMenuId(menuId);
    }
    
    // 해당 재료를 사용하는 메뉴 구하기
    public List<HashMap<String, Object>> getMenuByIngredientId(long ingredientId) {
        return menuMapper.findMenuByIngredientId(ingredientId);
    }

    // 모든 재료 정보 구하기
    public List<HashMap<String, Object>> getIngredientInfoAll(long group_id) {
        List<HashMap<String, Object>> ingredients = menuMapper.findAllIngredient();
        List<HashMap<String, Object>> usedIngredients = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
        List<String> menus = new ArrayList<String>();
        
        HashMap<String, Object> input = new HashMap<String, Object>();

        if(ingredients == null) {
            input.put("error", "nodata");
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
            result.add(input);
        } else {
            long ingredient_id;
            for (HashMap<String, Object> data : ingredients) {
                ingredient_id = Long.valueOf(data.get("id").toString());
                input.put("id", ingredient_id);
                input.put("ingredient_name", replaceStr(data.get("name").toString()));
                usedIngredients = menuMapper.findIngredientInfoById(ingredient_id);
                
                for(HashMap<String, Object> value : usedIngredients) {
                    menus.add(replaceStr(value.get("name").toString()));
                }
                usedIngredients.clear();

                usedIngredients = menuMapper.findIngredientInfoById_Self(ingredient_id);
                for(HashMap<String, Object> value : usedIngredients) {
                    menus.add(replaceStr(value.get("name").toString()));
                }
                usedIngredients.clear();

                input.put("menu", menus);
                input.put("satisfy", ratingMapper.findRatingOfIngredient(group_id, ingredient_id));

                Gson gson = new Gson();
                HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
                result.add(jsonObject);
                menus.clear();
                input.clear();
            }
        }
        return result;
    }

    public HashMap<String, Object> getIngredientInfoId(long ingredient_id, long group_id) {
        HashMap<String, Object> ingredient = menuMapper.findIngredientById(ingredient_id);
        // top5 메뉴 정보를 가지는 list
        List<HashMap<String, Object>> menuList = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> top5Data = ratingMapper.findRatingTop5ByIngredient(group_id, ingredient_id);

        List<Integer> ratingCount = new ArrayList<Integer>(){
            {   
                add(0);
                add(0);
                add(0);
                add(0);
                add(0);
            }
        };
        
        HashMap<String, Object> input = new HashMap<String, Object>();
        HashMap<String, Object> menuData = new HashMap<String, Object>();
        if(ingredient == null) {
            input.put("error", "nodata");
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
        } else {
            input.put("id", ingredient_id);
            input.put("ingredient_name", ingredient.get("name"));

            int cnt = 0;
            long menuId;
            double average = 0;
            for(HashMap<String, Object> data : top5Data) {
                menuId = Long.valueOf(data.get("id").toString());
                menuData.put("id", ++cnt);
                // 최근 나온 날짜
                menuData.put("lastest", menuMapper.findRecentDateByMenuId(menuId, group_id).get("recentDate").toString());
                menuData.put("name", replaceStr(data.get("name").toString()));
                menuData.put("satisfy", ratingMapper.findRatioByMenuId(menuId));
                average += Double.valueOf(ratingMapper.findRatioByMenuId(menuId).get("ratio").toString());
                Gson gson = new Gson();
                HashMap<String, Object> jsonObject = gson.fromJson(menuData.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
                menuList.add(jsonObject);
                menuData.clear();

                List<HashMap<String, Object>> datas = ratingMapper.findCountOfratingDataById(group_id, menuId);
                for(HashMap<String, Object> value : datas) {
                    int idx = Integer.valueOf(value.get("rating_data").toString());
                    int count = Integer.valueOf(value.get("count").toString());
                    ratingCount.set(idx-1, ratingCount.get(idx-1) + count);
                   }
            }
        
            input.put("menu_list", menuList);
            input.put("satisfy", ratingCount.toString());
            average /= (cnt);
            input.put("average", average);
        }
        Gson gson = new Gson();
        HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
        
        return jsonObject;
    }

    // TODO : Menu Ratio가 기준이 아닌 Rating 테이블의 date_value 칼럼이 기준이 되어야함
    public List<HashMap<String, Object>> getDailyMenuInfoByDates(long group_id, Date start, Date end) {
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> datas = menuMapper.findAllDailyMenuByDates(start, end, group_id);

        HashMap<String, Object> input = new HashMap<String, Object>();

        Date currDate = Date.valueOf("1999-01-01");
        int beforeTime = -1;
        int timeValue = 1;
        List<String> menus = new ArrayList<String>();
        if(datas == null) {
            input.put("error", "nodata");
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
        } else {
            for(HashMap<String, Object> data : datas) {
                timeValue = Integer.valueOf(data.get("time").toString());
                if(beforeTime != -1 && timeValue != beforeTime) {
                    switch(beforeTime) {
                        case 1:
                            input.put("title", "조식");
                            break;
                        case 2:
                            input.put("title", "중식");
                            break;
                        case 3:
                            input.put("title", "석식");
                            break;
                        default:
                            break;
                    }
                    HashMap<String, Object> ratioValue = ratingMapper.findRatioByDateTime(currDate, timeValue, group_id);
                    input.put("ratio", (ratioValue == null) ? 0 : ratioValue.get("ratio").toString());
                    input.put("description", menus);
                    input.put("time", beforeTime);
                    input.put("date", currDate);
                    Gson gson = new Gson();
                    HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
                    result.add(jsonObject);
                    input.clear();
                    menus.clear();
                }
                menus.add(replaceStr(data.get("name").toString()));
                beforeTime = timeValue;
                currDate = Date.valueOf(data.get("date_value").toString());
            }
        }
        return result;
    }


    public List<HashMap<String, Object>> getMenuInfoAll(long group_id) {
        List<HashMap<String, Object>> menus = menuMapper.findAllMenu(group_id);
        List<HashMap<String, Object>> usedIngredients = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
        List<String> ingredients = new ArrayList<String>();
        
        HashMap<String, Object> input = new HashMap<String, Object>();

        if(menus == null) {
            input.put("error", "nodata");
            result.add(input);
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
        } else {
            long menu_id;
            for (HashMap<String, Object> data : menus) {
                menu_id = Long.valueOf(data.get("id").toString());
                input.put("id", menu_id);
                input.put("menu_name", replaceStr(data.get("name").toString()));
                usedIngredients = menuMapper.findUsedIngredientsByMenuId(menu_id);
                
                for(HashMap<String, Object> value : usedIngredients) {
                    ingredients.add(replaceStr(value.get("name").toString()));
                }
                

                input.put("ingredient_list", ingredients);
                input.put("satisfy", ratingMapper.findRatioByMenuId(menu_id));

                
                Gson gson = new Gson();
                HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
                result.add(jsonObject);
                input.clear();
                ingredients.clear();
                usedIngredients.clear();
            }
        }
        
        return result;
    }

    public List<HashMap<String, Object>> getMenuInfoId(long group_id, long menu_id) {
        Menu menu = menuMapper.findMenuById(menu_id, group_id);
        List<HashMap<String, Object>> usedIngredients = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> ingredients = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> recentInfo = new ArrayList<HashMap<String, Object>>();

        List<Integer> ratingCount = new ArrayList<Integer>(){
            {
                add(0);
                add(0);
                add(0);
                add(0);
                add(0);
            }
        };
        HashMap<String, Object> input = new HashMap<String, Object>();
        HashMap<String, Object> ingredient_info = new HashMap<String, Object>();

        if(menu == null) {
            input.put("error", "nodata"); 
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
            result.add(jsonObject);
        } else {
            input.put("id", menu_id);

            input.put("menu_name", replaceStr(menu.getName()));

            usedIngredients = menuMapper.findUsedIngredientsByMenuId(menu_id);
            for(HashMap<String, Object> value : usedIngredients) {
                value.put("satisfy", ratingMapper.findRatingOfIngredient(group_id, Long.valueOf(value.get("id").toString())));
            }

            input.put("ingredient_list", usedIngredients);

            List<HashMap<String, Object>> datas = ratingMapper.findCountOfratingDataById(group_id, menu_id);
            for(HashMap<String, Object> value : datas) {
                int idx = Integer.valueOf(value.get("rating_data").toString());
                int count = Integer.valueOf(value.get("count").toString());
                ratingCount.set(idx-1, ratingCount.get(idx-1) + count);
            }

            input.put("satisfy", ratingCount.toString());

            datas.clear();
            datas = menuMapper.findRecent3DateByMenuId(menu_id, group_id);
            for(HashMap<String, Object> value : datas) {
                final Date dateValue = Date.valueOf(value.get("recentDate").toString());
                final int timeValue = Integer.valueOf(value.get("time").toString());
                recentInfo.add(new HashMap<String, Object>() {{
                    put("time", dateValue);
                    put("type", timeValue);
                    put("satisfy", ratingMapper.findRatioByDateTime(dateValue, timeValue, group_id).get("ratio").toString());
                }});
            }
            input.put("lastest", recentInfo);

            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
            result.add(jsonObject);
            datas.clear();
            input.clear();
        }
        

        return result;
    }

    public String replaceStr(String str) {
        // 데이터중 특수문자 ㎖ 및 공백으로 인해 com.google.gson.stream.MalformedJsonException 발생
        String tempStr = str.replace("㎖", "ml");

        // 한글, 영어, 일부 특수문자를 제외한 문자 제거
        String match = "[^\uAC00-\uD7A3xfe0-9a-zA-Z~!@#$%^&*()_+|<>?:{}]";
        tempStr = tempStr.replaceAll(match, "");
        return tempStr;
    }
    
    
}