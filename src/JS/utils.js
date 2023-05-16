import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function createMeal(title, type) {

    return axios
        .post(`${BASE_URL}/api/plannedmeals`, { title, type })
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function createIngredient(mealId, quantity, ingredient) {

    return axios
        .post(`${BASE_URL}/api/plannedmeals/${mealId}/mealingredients`, { quantity, ingredient })
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function getMeals() {

    return axios
        .get(`${BASE_URL}/api/plannedmeals`)
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function deleteMeal(mealId) {

    return axios
        .delete(`${BASE_URL}/api/plannedmeals/${mealId}`)
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function deleteAllMeals() {

    return axios
        .delete(`${BASE_URL}/api/plannedmeals/`)
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function getIngredients() {

    return axios
        .get(`${BASE_URL}/api/mealingredients`)
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}

export function updateIngredient(mealId, ingredientId, completed) {
    console.log(ingredientId)
    return axios
        .put(`${BASE_URL}/api/plannedmeals/${mealId}/mealingredients/${ingredientId}`, { completed })
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            alert(`${response.data}`);
        });
}