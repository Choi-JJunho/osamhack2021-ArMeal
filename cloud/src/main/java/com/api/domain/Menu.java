package com.api.domain;

import io.swagger.annotations.ApiModelProperty;
import java.sql.Timestamp;
public class Menu {

	@ApiModelProperty(hidden = true)
    private long id;

	@ApiModelProperty(notes = "메뉴명", example = "1")
	private String name;

	@ApiModelProperty(notes = "메뉴타입\n1: 메인메뉴(mainmenu)\n2: 자율메뉴(selfmenu)\n3: 후식(dessert)", example = "1")
	private int menu_type;

	@ApiModelProperty(notes = "메뉴 점수", example = "0")
	private int score;

	@ApiModelProperty(hidden = true)
    private Timestamp created_at;

	@ApiModelProperty(hidden = true)
    private Timestamp deleted_at;
	
	@ApiModelProperty(hidden = true)
    private boolean is_deleted;
	

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMenutype() {
		return this.menu_type;
	}

	public void setMenutype(int menutype) {
		this.menu_type = menutype;
	}

	public long getScore() {
		return this.score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public Timestamp getCreated_at() {
		return this.created_at;
	}

	public void setCreated_at(Timestamp created_at) {
		this.created_at = created_at;
	}

	public Timestamp getDeleted_at() {
		return this.deleted_at;
	}

	public void setDeleted_at(Timestamp deleted_at) {
		this.deleted_at = deleted_at;
	}

	public boolean isIs_deleted() {
		return this.is_deleted;
	}

	public boolean getIs_deleted() {
		return this.is_deleted;
	}

	public void setIs_deleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", name='" + getName() + "'" +
			", menutype='" + getMenutype() + "'" +
			", score='" + getScore() + "'" +
			", created_at='" + getCreated_at() + "'" +
			", deleted_at='" + getDeleted_at() + "'" +
			", is_deleted='" + isIs_deleted() + "'" +
			"}";
	}
}
