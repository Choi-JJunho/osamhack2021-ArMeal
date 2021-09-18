package com.api.domain;

import java.sql.Timestamp;

public class Rating {
    private long id;
	private long User_id;
	private long Menu_id;
    private Integer rating_data;
    private Timestamp created_at;
    private Timestamp deleted_at;
    private boolean is_deleted;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

    public long getUserId() {
		return User_id;
	}
	public void setUserId(long id) {
		this.User_id = User_id;
	}

    public long getMenu_id() {
		return Menu_id;
	}
	public void setMenu_id(long Menu_id) {
		this.Menu_id = Menu_id;
	}

    public Integer getRatingData() {
		return rating_data;
	}
	public void setRatingData(Integer rating_data) {
		this.rating_data = rating_data;
	}

    public boolean getIsDeleted() {
		return is_deleted;
	}
	public void setIsDeleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	public Timestamp getdeletedAt() {
		return deleted_at;
	}
	public void setDeletedAt(Timestamp deleted_at) {
		this.deleted_at = deleted_at;
	}

	public Timestamp getCreatedAt() {
		return created_at;
	}
	public void setCreatedAt(Timestamp created_at) {
		this.created_at = created_at;
	}
}
