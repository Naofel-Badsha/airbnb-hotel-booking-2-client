import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "./../../../Hooks/useAuth";
import { imageUpload } from "../../../api/utils";

const AddRoom = () => {
  const { user } = useAuth();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  //------Date--Range----Handler------
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };

  //----Form----Submit---Handler-----
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.startDate;
    const from = dates.endDate;
    const image = form.image.files[0];

    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user.email,
    };

    //----Use---To---SingUp------
    try {
      const image_url = await imageUpload(image);
      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        image: image_url,
      };
      console.log(roomData)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add Room Page</h1>
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
