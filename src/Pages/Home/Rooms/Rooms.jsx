
import Heading from "../../../Shared/Heading/Heading";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Container from "../../../Shared/Container/Container";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { useSearchParams } from "react-router-dom";

const Rooms = () => {
  const axiosCommon = useAxiosCommon();
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
  //-------Tangstack------Query-------
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ['rooms', category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}`)

      return data
    },
  })
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
