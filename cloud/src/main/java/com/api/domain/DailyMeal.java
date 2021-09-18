package com.api.domain;

import java.sql.Date;
import java.util.ArrayList;

public class DailyMeal {
    private Date date;
    // 1. 조식 2. 중식 3. 석식
	private Integer time;
	private Long group_id;
	private Integer menu;
    
	public Date getDate() {
		return this.date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Integer getTime() {
		return time;
	}
	public void setTime(Integer time) {
		this.time = time;
	}
    public Long getGroupId() {
		return group_id;
	}
	public void setGroupId(Long id) {
		this.group_id = group_id;
	}
    public Integer getMenu() {
		return this.menu;
	}
	public void setMenu(Integer menu) {
		this.menu = menu;
	}
}
