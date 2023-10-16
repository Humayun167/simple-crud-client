import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    return (
    
        <div>
            <h3>Update the information of {loadedUser.name}</h3>
            <form >
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;