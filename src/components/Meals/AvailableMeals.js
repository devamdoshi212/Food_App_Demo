import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Gathiya",
    description: "with Tea and Chutney",
    price: 500,
  },
  {
    id: "m2",
    name: "Thepla",
    description: "with Pickles and Tea",
    price: 100,
  },
  {
    id: "m3",
    name: "Khaman",
    description: "with sev and mirchi",
    price: 200,
  },
  {
    id: "m4",
    name: "Kachori",
    description: "with red chutney and green chutney",
    price: 100,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
