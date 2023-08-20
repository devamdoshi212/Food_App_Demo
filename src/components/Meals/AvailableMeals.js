import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const [loading, setloading] = useState(true);
  const [httperror, sethttperror] = useState(null);
  useEffect(() => {
    const fetchmeals = async () => {
      // setloading(true);
      const Response = await fetch(
        "https://food-app-92ca5-default-rtdb.firebaseio.com/meals.json"
      );
      if (!Response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await Response.json();
      let mealsarray = [];
      for (const key in data) {
        mealsarray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setloading(false);
      setmeals(mealsarray);
      // console.log(mealsarray);
    };
    fetchmeals().catch((error) => {
      setloading(false);
      sethttperror(error.message);
    });
  }, []);
  const mealsList = meals.map((meal) => (
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
        {!loading && !httperror && <ul>{mealsList}</ul>}
        {!loading && (
          <div className="d-flex justify-content-center">{httperror}</div>
        )}
        {loading && (
          <div className="d-flex justify-content-center">
            <PropagateLoader color="#36d7b7" />
          </div>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
