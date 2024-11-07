import { Text, View } from "react-native"
import CustomBtn from "../components/CustomBtn"
import { T } from "@tolgee/react"
import Svg, { Path } from "react-native-svg"
import { Link } from "expo-router"

export default function Index() {
	return (
		<>
			<View className="z-5 w-full h-[90%] absolute ">
				<View className="bg-white/25 w-64 z-10 h-64 absolute top-[33%] left-[20%] rounded-full " />
				<Text
					style={{ fontFamily: "Rye_400Regular" }}
					className="text-grad shadow-lg w-full h-full z-20 text-7xl absolute left-[14.5%] top-[45%]"
				>
					FlagPro
				</Text>
				<CustomBtn text="Start" route="/ques/q0" classes="" />
			</View>
			<View className="w-full h-fit absolute bottom-6 z-10 flex flex-row items-center justify-center ">
				<Text className=" z-10  text-white text-center font-semibold mr-1 text-sm">
					<T keyName="Powered by" />
				</Text>
				<Link href="https://tolgee.io/">
					<Svg
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
						stroke="white"
						strokeWidth={4}
						style={{
							fill: "#EC407A",
							fillRule: "evenodd",
							clipRule: "evenodd",
							strokeLinejoin: "round",
							strokeMiterlimit: 2,
						}}
						className=" w-5 h-5 z-10 mt-1"
					>
						<Path d="M97.16,7.27a16.94,16.94,0,0,0-1.9,24.47,16.36,16.36,0,0,0,5,3.83,3.23,3.23,0,0,1-2.9,5.77,23.14,23.14,0,0,1-11.41-13C73.83,31.1,63.46,37.09,52.82,46.51c-27.44,24.3-34.35,61.74-16.38,85.26-4.57,5.79-8,12.22-8.9,18.69a20.88,20.88,0,0,0,5.62,18c9.18,9.61,21.42,7.13,31.26,5.14,6.58-1.34,12.8-2.6,16.5-.23,3.22,2.07,3.47,3.87,3.61,4.45,2.1,9.32-5.79,13.89-7.67,16.27a1.48,1.48,0,0,0,1.13,2.4c3.48,0,9-1.18,12.34-4.08s7.16-7.9,5.89-16.32c-.08-.5-.18-1-.32-1.58-.86-3.35-3.1-7.57-8.61-11.09-7.72-4.95-17-3.07-25.22-1.41-9.76,2-16,2.85-20.37-1.71a9.13,9.13,0,0,1-2.46-8.19c.54-3.77,2.65-7.89,5.62-11.86,21.71,16.89,56.87,13.47,82.67-9.39a75.34,75.34,0,0,0,20.81-28.09A23.14,23.14,0,0,1,134.8,89a3.23,3.23,0,0,1,6.08-2.19,16.37,16.37,0,0,0,3.2,5.39,16.85,16.85,0,1,0,11.48-28,3.23,3.23,0,0,1-.51-6.44,23.41,23.41,0,0,1,12.88,2.69c2.6-14.08,3.34-31.41-2.06-37.51-4.08-4.61-20.62-8-35.18-7.76A23.48,23.48,0,0,1,130.8,25a3.23,3.23,0,0,1-6.33-1.28A16.94,16.94,0,0,0,97.16,7.27Zm63.25,21a5.29,5.29,0,0,1-.57,6.19c-1.29,1.14-2.72-.51-4.1-2.06s-3.1-3.42-1.81-4.56A5.74,5.74,0,0,1,160.41,28.27Z" />
					</Svg>
				</Link>
			</View>
		</>
	)
}