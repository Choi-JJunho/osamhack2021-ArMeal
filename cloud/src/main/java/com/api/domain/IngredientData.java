package com.api.domain;

public class IngredientData {
    private long id;
	private String name;


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

	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", name='" + getName() + "'" +
			"}";
	}
	
}
