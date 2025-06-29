export default function Horaires() {
  return (
    <div className="h-full flex flex-col ">
      <h3 className="pb-6 font-title text-3xl text-gray-800">Horaires :</h3>
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="bg-gray-50/70 p-2 pl-4 rounded-lg border-l-3">
            <h4 className="font-medium text-xl pb-2">Mai à Octobre</h4>
            <p className="font-medium">
              Du vendredi au dimanche :{" "}
              <span className="text-pink">13h - 18h</span>
            </p>
          </div>

          <div className="bg-gray-50/70 p-2 pl-4 rounded-lg border-l-3">
            <h4 className="font-medium text-xl pb-2">Juillet à Août</h4>
            <p className="font-medium">
              Du mercredi au dimanche :{" "}
              <span className="text-pink">11h - 19h</span>
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic mt-8 pt-4 border-t border-gray-200">
          *Les horaires sont susceptibles d&apos;être modifiées en fonction des
          conditions météo et de l&apos;affluence
        </p>
      </div>
    </div>
  );
}
