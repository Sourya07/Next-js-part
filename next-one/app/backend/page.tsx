import axios from "axios"
async function getUserDetails() {
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    return response.data;
}


//async component
export default async function Backend() {
    const userData = await getUserDetails();

    return (


        <>
            <div>
                {userData.email} </div>
            <div>
                {userData.name}
            </div>

        </>
    );
}
