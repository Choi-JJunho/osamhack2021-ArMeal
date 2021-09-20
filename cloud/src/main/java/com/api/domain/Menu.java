package com.api.domain;

public class Menu {

	private long id;
	private String dateValue;
	private int time;
    private long group_id;
    private long menu;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDateValue() {
		return dateValue;
	}
	public void setDatevalue(String dateValue) {
		this.dateValue = dateValue;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public long getGroupId() {
		return group_id;
	}
	public void setGroupId(long groupId) {
		this.group_id = group_id;
	}
	public long getMenu() {
		return menu;
	}
	public void setMenu(long menu) {
		this.menu = menu;
	}

}
