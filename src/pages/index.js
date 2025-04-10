import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-svh min-w-svw bg-[#2664dd] flex justify-center items-center p-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-white -translate-y-[35%]"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-white hidden"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
            </div>

            <p className="text-white absolute font-medium bottom-12">@adrielloks</p>

            <div className="w-full rounded-3xl p-2 bg-[#10121e] relative md:min-w-[280px] md:max-w-[280px]">

                <div className="relative bg-[#a2e5f5] rounded-2xl">
                    <div className="absolute -top-1 border-[#10121e] border-4 border-solid bg-[#4373f7] rounded-b-[2.5rem] mx-auto inset-x-0 px-8 w-fit py-0.5 font-medium text-center">Uncommon</div>
                    <div className="bg-[#1e1e28] border-4 border-solid border-[#10121e] inset-x-0 w-fit px-12 py-0.25 text-center absolute z-10 -bottom-1 rounded-t-[2.5rem] mx-auto font-semibold">0.5 ETH</div>
                    <Image src={"/ape.jpeg"} className="cs_ max-h-64 object-cover rounded-2xl scale-75 relative top-2 z-0" width={736} height={1308} alt="" />
                </div>

                <div className="flex flex-col gap-2 p-0">
                    <div className="flex flex-col gap-2 p-2">
                        <h1 className="font-bold">HAPE #67</h1>
                        <div className="flex gap-1 items-center">
                            <div className="size-4 bg-white rounded-full"><Image src={"/letter-h.png"} className="rounded-full size-4" width={512} height={512} alt="" /></div>
                            <p className="text-sm font-medium text-gray-400">HAPE PRIME</p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#1e1e28] p-4 grid grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#c4c4cc] font-medium text-xs">Avg Earnings</h2>
                            <p className="font-medium text-sm">$5/h</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#c4c4cc] font-medium text-xs">Distribution</h2>
                            <div className="w-full grid grid-cols-2">
                                <div className="border-r border-solid border-gray-50 py-0.5 flex items-center gap-2">
                                    <div className="bg-green-300 size-3 rounded-full opacity-50 flex justify-center items-center relative -top-0.25"><div className="bg-green-500 size-2 rounded-full"></div></div>
                                    <p className="text-sm font-medium">80</p>
                                </div>
                                <div className="flex items-center gap-2 pl-4">
                                    <div className="bg-[#31166c] size-3 rounded-full opaciy-50 flex justify-center items-center relative -top-0.25"><div className="bg-[#6e30e8] size-2 rounded-full"></div></div>
                                    <p className="text-sm font-medium">80</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}