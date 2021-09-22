package com.api.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.springframework.stereotype.Service;

@Service
public class ParsingData {

    public Map<String, Object> getMenu(String startIdx, String endIdx) {
        List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
        StringBuffer input = new StringBuffer();

        try {
            String apiUrl = "https://openapi.mnd.go.kr/3337313637333633343031323532313037/json/DS_TB_MNDT_DATEBYMLSVC_9030/" + startIdx + "/" + endIdx + "/";
            URL url = new URL(apiUrl);
            HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();
            urlConn.setRequestMethod("GET");
            
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "UTF-8"));

            String res;

            while((res = bufferedReader.readLine()) != null) {
                input.append(res + "\n");
            }
            urlConn.disconnect();
            
            Gson gson = new Gson();
            Map<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<Map<String, Object>>(){}.getType());

            result.add(jsonObject);
            System.out.println(jsonObject.toString());
            return jsonObject;

        } catch (Exception e) {
            e.printStackTrace();
        }

        HashMap<String, Object> hashMap = new HashMap<String, Object>();
        hashMap.put("message", "nonedata");
        return hashMap;
    }

}
