import { Box, Button } from "@mui/material";
import { useProducts } from "../../hooks/product";

export default function Main() {
  const { productList, addMutation, editMutation } = useProducts({
    page: 1,
    limit: 10,
  });

  console.log(productList);

  async function handleClick() {
    try {
      await addMutation.mutateAsync({
        price: "20000",
        description: "Bàn chải đẹp, chà trắng răng 1",
        firstPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        secondPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        thirdPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        fourthPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        fifthPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleEditClick() {
    try {
      await editMutation.mutateAsync("6419ddec47539cb531eb2aca", {
        price: "20000",
        description: "Bàn chải đẹp, chà trắng răng 2",
        firstPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        secondPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        thirdPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        fourthPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
        fifthPicture:
          "https://th.bing.com/th/id/OIP.Xgz63arMxakRk1F9RaWD-AHaJ4?w=158&h=210&c=7&r=0&o=5&pid=1.7",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>
        Main
      </Button>
      <Button variant="contained" onClick={handleEditClick}>
        edit
      </Button>
    </Box>
  );
}
