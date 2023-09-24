let order = prompt("What o prefer to do?");
order.toLowerCase();

const todoItems = ["Buy New Turtle"];

while (order) {
  if (order === "new") {
    let item = prompt("Insert a new todo?");
    todoItems.push(item);
    console.log(`${item} added to list`);
  }

  if (order === "list") {
    console.log(`****************`);
    for (let i = 0; i < todoItems.length; i++) {
      console.log(`${i} : ${todoItems[i]}`);
    }
    console.log(`****************`);
  }

  if (order === "delete") {
    const n = parseInt(
      prompt("Witch item you want to delete, choose the number")
    );
    console.log(`Todo Removed`);
    console.log(`****************`);
    todoItems.splice(n, 1);
    for (let i = 0; i < todoItems.length; i++) {
      console.log(`${i} : ${todoItems[i]}`);
    }
    console.log(`****************`);
  }

  if (order === "quit") {
    console.log("Ok!, you quit the App");
    break;
  }

  // console.log(todoItems);
  order = prompt("Do you want to do something else?");
}
