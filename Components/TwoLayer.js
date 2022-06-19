const TwoLayer = ({ imgSrc, features, titleText }) => {
    return <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-end items-center">
                <div>
                    <img src={imgSrc} alt="pool" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="flex justify-start items-center">
                <div>
                    <h2 className="text-3xl font-semibold text-rose-500 mb-5">{titleText}</h2>
                    <div>
                        {
                            features.map((list, index) => <li className="text-lg font-semibold" key={index}>
                                {list}
                            </li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default TwoLayer;