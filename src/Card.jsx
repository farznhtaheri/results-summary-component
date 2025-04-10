export default function Card({ title, img, score, color }) {

  const backgroundColors = {
    lightRed: "bg-light-red/5",
    orangeyYellow: "bg-orangey-yellow/5",
    greenTeal: "bg-green-teal/5",
    blueCobalt: "bg-cobalt-blue/5"
  }

  const textColors = {
    lightRed: "text-light-red",
    orangeyYellow: "text-orangey-yellow",
    greenTeal: "text-green-teal",
    blueCobalt: "text-cobalt-blue"
  }

  return (
    <div className={`flex ${backgroundColors[color]} rounded-md p-3 gap-2 mb-3.5`}>
      <img src={img} />
      <div className={`${textColors[color]}`}>
        {title}
      </div>
      <div className="ml-auto">
        <span className="text-dark-gray-blue">
          {score + " "}
        </span>
        <span className="text-light-lavender">
          / 100
        </span>
      </div>
    </div>
  )
}