<template>
  <div>
    <w-flex>
      <p>Hello wave</p>
      <w-form class="mt4">
        <w-input label="name" v-model="name" />
        <w-input label="origin" v-model="origin" />
        <w-input label="description" v-model="description" />
        <w-select v-model="selectedCategory" :items="categories"
          >Categories</w-select
        >
        <div>
          <w-input
            label="ingredient(include measurement)"
            v-model="inMeasure"
          />
          <span><i class="bx bx-plus" @click="addIn" /></span>
        </div>

        <w-input label="Cooking Step" v-model="prepStep" />
        <i class="bx bx-plus" @click="addStep" />
        <br />
      </w-form>
    </w-flex>
  </div>
</template>

<script setup>
const name = ref("");
const origin = ref("");
const description = ref("");
const categories = ref([
  { label: "Appetizer" /*, value: "appetiser"*/ },
  { label: "Snack" /*, value: "snack"*/ },
  { label: "Sides" /*, value: "side"*/ },
  { label: "Main course" /*, value: "main course"*/ },
  { label: "Dessert" /*, value: "dessert"*/ },
  { label: "Fastfood" /*, value: "fast food" */ },
  { label: "Pastries" /*, value: "pastries"*/ },
]);
const selectedCategory = ref(null);
console.warn(selectedCategory.value);
const inMeasure = ref("");
const ingredients = ref([]);
const prepStep = ref("");
const cookingSteps = ref([]);
function addIn() {
  if (inMeasure.value !== "") {
    ingredients.value.push(inMeasure.value);
    inMeasure.value = "";
    console.log("Succesfully added ingredient");
    console.log(ingredients.value);
  } else {
    alert("No ingredient, please add");
    return;
  }
}
function removeIngredient() {
  ingredients.value.length > 0 && ingredients.value.pop();
}
function removeCookingStep() {
  cookingSteps.value.length > 0 && cookingSteps.value.pop();
}
function addStep() {
  if (prepStep.value !== "") {
    cookingSteps.value.push(prepStep.value);
    prepStep.value = "";
    console.log("Added cooking step");
  } else {
    alert("Step not added, add first");
    return;
  }
}
</script>

<style scoped>
i.bx:hover {
  cursor: pointer;
  color: red;
}
</style>
