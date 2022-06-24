import React from "react";
interface User_Friends {

}

export const User_Friends: React.FC = () => {

    return (
        <div className="my-2">
            <div className="container flex items-center gap-3">
                <img className="rounded-full w-8 h-8" src="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <div>
                    <h1 className="text-xs font-semibold">usol.203</h1>
                    <h1 className="text-xs font-medium">asol_uhight</h1>
                </div>
                <button className="ml-auto font-semibold text-[#0095F7] text-xs">Follow</button>
            </div>
        </div>
    )
}