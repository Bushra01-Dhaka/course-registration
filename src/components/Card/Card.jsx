
const Card = ({card}) => {
    console.log("Card", card);
    const {id, course_img,title,description,price,credit} = card;
    return (
        <div className="card h-[400px] border-2 border-black rounded p-2 text-center">
            <img className="w-full h-[150px] rounded mx-auto" src={course_img} alt="" />
            <h2 className="text-xl  font-bold text-black">{title}</h2>
            <p className="my-2">{description}</p>
            <div className="flex justify-evenly">
                <p>Price: {price}</p>
                <p>Credit: {credit}</p>
            </div>
            <button className="btn w-full mx-auto relative mb-0 text-white bg-[#2F80ED]">Select</button>

            

             
        </div>
    );
};

export default Card;