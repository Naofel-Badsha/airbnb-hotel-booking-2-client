import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import RoomDataRow from "../../../Components/TableRows/RoomDataRows";
import toast from "react-hot-toast";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //-----Fetch-----Rooms-----Data------
  const {data: rooms = [], isLoading, refetch } = useQuery({
    queryKey: ["myListings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myListings/${user?.email}`);
      return data;
    },
  });

  //-----Room----Delete-----Data------
  const {mutateAsync} = useMutation({
     mutationFn: async (id) => {
      const {data} = await axiosSecure.delete(`/room/${id}`)
      return data 
     },
     onSuccess: data => {
      console.log(data)
      refetch()
      toast.success('SuccessFully Delet')
     } 
  })

  //-------Handle-------Delete---------
  const handleDelete = async id => {
    console.log(id)
    try{
      await mutateAsync(id)
    } catch (err){
     console.log(err)
    }
  }


  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  console.log(rooms)
  return (
    <div>
      <h1>My Listing</h1>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Room
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xl font-bold"
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {rooms.map(room => <RoomDataRow key={room._id}
                  room={room}
                  // refetch={refetch}
                  handleDelete={handleDelete}
                  ></RoomDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
