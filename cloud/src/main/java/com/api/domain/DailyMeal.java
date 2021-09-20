package com.api.domain;

import java.sql.Date;

public class DailyMeal {
    private Date date;
    // 1. 조식 2. 중식 3. 석식
	private int time;
	private Long group_id;
	private int menu;
    
	public Date getDate() {
		return this.date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
    public Long getGroupId() {
		return group_id;
	}
	public void setGroupId(Long id) {
		this.group_id = group_id;
	}
    public int getMenu() {
		return this.menu;
	}
	public void setMenu(int menu) {
		this.menu = menu;
	}
}
