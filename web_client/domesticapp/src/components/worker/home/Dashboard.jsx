import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Rating } from "@mui/material";

const workers = [
  {
    id: "cbb2392b-debc-42f1-afa2-ed696ae8c67f",
    first_name: "Miltie",
    last_name: "Kettlesing",
    rating: 3.0,
    status: 3.6,
    price: 1,
  },
  {
    id: "ca70f1c7-d31e-4cab-bfd9-ff8a3fa1f530",
    first_name: "Catlin",
    last_name: "Claessens",
    rating: 4.2,
    status: 4.14,
    price: 64,
  },
  {
    id: "91049cbc-3432-4dc2-b2a5-0178a5d00dad",
    first_name: "Axel",
    last_name: "Dronsfield",
    rating: 1.3,
    status: 3.91,
    price: 31,
  },
  {
    id: "b84ef89b-33f5-42ba-b2a8-276703ca29b9",
    first_name: "Trenna",
    last_name: "Bonnell",
    rating: 2.1,
    status: 1.09,
    price: 69,
  },
  {
    id: "090ef182-53f2-4fe0-92af-26b14dce740f",
    first_name: "Arv",
    last_name: "Cannavan",
    rating: 2.3,
    status: 1.88,
    price: 32,
  },
  {
    id: "79f390e0-d550-4d8e-871e-4159b8b77df4",
    first_name: "Kipper",
    last_name: "Dumphrey",
    rating: 4.8,
    status: 6.22,
    price: 17,
  },
  {
    id: "3477763e-70eb-455a-9cdc-4c5de7325213",
    first_name: "Jada",
    last_name: "Westwick",
    rating: 1.8,
    status: 9.46,
    price: 22,
  },
  {
    id: "3ee9c3f4-0628-4d14-a8d8-5423655c7ed0",
    first_name: "Jeniffer",
    last_name: "Koppel",
    rating: 1.7,
    status: 9.34,
    price: 84,
    job: {
      id: 1,
      name: "Landscaping",
    },
  },
  {
    id: "4a656a5b-8bb5-4a0b-a881-3be41ea3a8a8",
    first_name: "Kerrie",
    last_name: "Hockell",
    rating: 2.7,
    status: 1.88,
    price: 63,
  },
  {
    id: "5010957b-d5ee-414d-99d1-ba21705abdad",
    first_name: "Robbyn",
    last_name: "Gowdridge",
    rating: 3.1,
    status: 2.49,
    price: 21,
  },
];
const Dashboard = () => {
  return (
    <>
      <main className="m-6">
        <section>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider md:text-left"
                        >
                          Client
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Job
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Earnings
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Service rating
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {workers?.map((worker) => (
                        <>
                          <tr className="md:hidden ">
                            <td className="flex justify-between gap-x-6 py-5 px-3">
                              <div className="flex min-w-0 gap-x-4 items-center">
                                <img
                                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                  src="https://picsum.photos/200"
                                  alt=""
                                />
                                <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {`${worker?.first_name} ${worker?.last_name}`}
                                  </p>
                                  <Rating
                                    name={`${worker?.id}-rating`}
                                    defaultValue={worker?.rating}
                                    precision={0.1}
                                    readOnly
                                    size="small"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="mb-1 flex justify-between">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-green-800">
                                    {worker.status}
                                  </span>
                                  <span className="px-2 inline-flex ml-5 items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                    {`$${worker?.price}`}
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 flex justify-between">
                                  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    {worker?.job?.name}
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="max-[768px]:hidden"
                            key={`product-item-${worker.id}`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Avatar>
                                    <AccountCircleIcon />
                                  </Avatar>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {/* {product.title} */}{" "}
                                    {`${worker?.first_name} ${worker?.last_name}`}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                  {worker?.job?.name}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {/* {`$ ${product.price}`} */}{" "}
                                {`${worker?.status} km`}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                {`$${worker?.price}`}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                              <Rating
                                name={`${worker?.id}-rating`}
                                defaultValue={worker?.rating}
                                precision={0.1}
                                readOnly
                              />
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
