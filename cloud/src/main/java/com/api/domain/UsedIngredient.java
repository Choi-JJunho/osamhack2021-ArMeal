package com.api.domain;

public class UsedIngredient {
    private long Menu_id;
	private long ingredient_data_id;

	public long getId() {
		return Menu_id;
	}
	public void setId(long Menu_id) {
		this.Menu_id = Menu_id;
	}
	public long getName() {
		return ingredient_data_id;
	}
	public void setName(long ingredient_data_id) {
		this.ingredient_data_id = ingredient_data_id;
	}
}
