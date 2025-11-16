import Image from "next/image";



export const NavigateButton = ({ title, link }) => {
    return (
        <a href={link} className="rounded-3xl py-3 px-12 flex justify-center max-w-max font-black text-2xl text-white font-[AlegrayBlack] bg-[#6F8476]">{title}</a>
    )
};

export const Title = ({ title }) => {
    return (
        <h1 className="font-bold text-5xl font-[AlegrayBold] text-white">{title}</h1>
    )
};

export const Text = ({ text }) => {
    return (
        <p className="font-bold text-3xl font-[AlegrayBold] text-white">{text}</p>
    )
};

export const Ratign = ({rating}) => {
    return(
        <p className="text-[#FFBB3C] font-bold text-2xl font-[AlegrayBold]">{rating}</p>
    )
}

export const SlideButton = ({img}) => {
    return(
        <a className="py-3 px-4 bg-[#CAD0B2] rounded-2xl hover:bg-[#849187] cursor-pointer"><Image src={img} alt="Картинка"/></a>
    )
}

export const Genre = ({genre}) =>{
    return(
        <div className="rounded-3xl bg-[#D9D9D9] px-7 py-1 max-w-max">
            <p className="text-[#585D59] text-xl font-[AlegrayRegular]">{genre}</p>
        </div>
    )
}

export const FooterText = ({name, text}) => {
    return(
        <div className="flex gap-1 text-white">
            <p className="text-lg font-medium text-[AlegrayMedium] inline whitespace-nowrap">{name}</p>
            <p 
            style={{
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}
            className="text-lg font-medium text-[AlegrayMedium]">{text}</p>
        </div>
    )
}

export const SoonAnime = ({}) => {
    return <div className="rounded-2xl bg-red-700 text-xl max-w-max text p-3 text-[AlegrayMedium] font-bold">Soon...</div>
}

export const FooterButton= ({name, func}) =>{
    return(
        <div onClick={func} className="rounded-3xl py-3 px-12 flex justify-center w-auto font-black text-2xl text-white font-[AlegrayBlack] bg-[#6F8476]">
            <a>
                <button>
                    <p className="font-bold text-3xl font-[AlegrayBold] text-white">{name}</p>
                </button>
            </a>
        </div>
    )
}