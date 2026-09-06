import AmountWrapper from "../AmountWrapper";

const StatsCard = ({
    cardTitle,
    cardMainData,
    cardSubData
}) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500"> {cardTitle} </p>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            <AmountWrapper amount={cardMainData} />
          </h2>
          <p className="mt-2 text-xs text-red-500">
            {cardSubData}
          </p>
        </div>
    )
}

export default StatsCard;