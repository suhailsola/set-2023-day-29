import { useForm } from "react-hook-form";
import MEMES from "./assets/meme.json";
import { useState } from "react";
import Drawer, {
  DrawerBody,
  DrawerHeader,
} from "./components/reusables/Drawer";
import Card from "./components/reusables/Card";

function App() {
  // return handlers function
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [img, setImg] = useState("");
  const [holdImg, setHoldImage] = useState("");
  const [text1Value, setText1Value] = useState();
  const [text2Value, setText2Value] = useState();
  const [textPosition, setTextPosition] = useState();
  // const [imgHeight, setImgHeight] = useState();
  const [drawer, setDrawer] = useState(false);
  const [color, setColor] = useState("white");

  const chooseImage = (event) => {
    const clickedImg = event.currentTarget.querySelector("img");
    if (clickedImg) {
      const imageClick = clickedImg.getAttribute("src");
      console.log(imageClick);
      setHoldImage(imageClick);
    }
  };

  const onSubmit = (data) => {
    // const randomNumber = Math.floor(MEMES.length * Math.random());
    // const usedImage = MEMES[randomNumber].url;
    // setImgHeight(MEMES[randomNumber].height);
    setText1Value(data.text1);
    setText2Value(data.text2);
    setTextPosition(data.textPosition);
    setColor(data.textColor);
    setImg(holdImg);
  };
  const drawerOpen = () => {
    setDrawer(!drawer);
  };

  // console.log(watch("text-1"), watch("text-2"), watch("text-position"));

  return (
    <div className=" w-screen h-screen bg-slate-300">
      <Drawer isShow={drawer}>
        <DrawerHeader className="" title={"Meme list"}></DrawerHeader>
        <DrawerBody className="flex flex-col items-center">
          {MEMES.map((element, index) => {
            return (
              <Card
                imageClick={(e) => chooseImage(e)}
                key={index}
                name={element.name}
                url={element.url}
              ></Card>
            );
          })}
        </DrawerBody>
      </Drawer>
      <div className=" w-screen h-auto flex justify-center items-center bg-slate-300 pb-8">
        <div className="w-[800px] h-auto bg-white border flex flex-col justify-between">
          <div className=" bg-purple-600 p-4 text-white flex justify-between items-center">
            <h1>🥴 MEME GENERATOR</h1>
            <button
              onClick={drawerOpen}
              className="border border-white p-2 rounded hover:bg-black"
            >
              {drawer ? "Close Meme list" : "Open Meme list"}
            </button>
          </div>
          <form
            className=" space-y-2 mt-2 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="text1">Text 1:</label>
            <input
              type="text"
              placeholder="Some text"
              className="border border-black block w-full p-2 rounded-md"
              {...register("text1", { required: true })}
            />

            <label htmlFor="text2">Text 2:</label>
            <input
              type="text"
              placeholder="Some text"
              className="border border-black block w-full p-2 rounded-md"
              {...register("text2", { required: false })}
            />
            <label htmlFor="textPosition">Text position:</label>
            <select
              className="border border-black block w-full p-2 rounded-md"
              {...register("textPosition", { required: true })}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
            <label htmlFor="textColor">Color:</label>
            <select
              className="border border-black block w-full p-2 rounded-md"
              {...register("textColor", { required: true })}
            >
              <option value="white">White</option>
              <option value="black">Black</option>
            </select>
            <button
              type=""
              className="bg-purple-600 p-4 text-white rounded-md block w-full !mt-4"
            >
              Generate Meme
            </button>
            <div
              className="w-full bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center font-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[60px] font-extrabold text-white gap-7"
              style={{
                backgroundImage: `url(${img})`,
                textAlign: `${textPosition}`,
                height: `${300}px`,
                color: `${color}`,
              }}
            >
              <p className=" w-4/5">{text1Value}</p>
              <p className=" w-4/5">{text2Value}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
