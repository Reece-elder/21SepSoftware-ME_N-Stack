import Child from "./Child";
import PizzaOrder from "./PizzaOrder";

const Parent = () => {
  return (
    <div>
      {/* <h2> This is the Parent </h2> */}
      {/* Pass our Props to our child component */}
      <Child string="This is from the Parent" />
      <Child string="This is the 2nd String" />
      <Child string="foo bar" />

      <br></br>
      <PizzaOrder flavour="Pepperoni" size={12} stuffed={true} />
      <PizzaOrder flavour="Hawiaan" size={13} stuffed={false} />
    </div>

    // Exercise
    // Using Props, Parent and child relationships; create a contact list of dogs / cats / any fun animals
    // Parent class - ContactList
    // Child class - Animal Contact Card

    // Child class must contain the following:
    // AnimalType, name, image, diet (Array), isCute
    // Parent class passes this data as props
  );
};

export default Parent;
