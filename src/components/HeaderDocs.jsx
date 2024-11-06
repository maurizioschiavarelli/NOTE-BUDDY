/* eslint-disable react/prop-types */
export default function HeaderDocs(props) {

    const title = props.title;
    const subTitle = props.subTitle;
    const description = props.description;
    const imgUrl = props.imgUrl;

    return (
        <div className="py-8 bg-gradient-to-b from-gray-900 from-1% to-gray-800 w-full p-10">
            <div className="my-20">
                <div className="relative container w-full mx-auto my-auto text-center bg-gray-900 rounded-lg shadow-2xl shadow-black">
                    <div 
                        className="absolute inset-0 opacity-40 blur-sm" 
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    ></div>
                    <div className="relative z-1 p-8">
                        <h1 
                            color="white" 
                            className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl">
                            {title}
                            <span className="leading-snug noteBuddy text-yellow-400">{subTitle}</span>
                        </h1>
                        <h2 
                            className="mx-auto w-full !text-white lg:text-lg text-base">
                            <span className="leading-snug text-yellow-400">{subTitle}</span> {description}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
