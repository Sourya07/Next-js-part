import axios from "axios"
async function getUserDetails() {
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data;
}


//async component
export default async function Backend() {
    const userData = await getUserDetails();

    return (


        <>
            <div className="flex flex-col justify-centre h-screen">
                <div className="flex justify-center">
                    <div className="border p-8 rounded">
                        <div>   email: {userData.email} </div>
                        name: {userData.name}
                    </div>

                </div>

            </div>


        </>
    );
}
