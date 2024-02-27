import React, { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";

function Todos() {
    const [isChecked, setIsChecked] = useState<boolean>(false); // Состояние для хранения информации о том, отмечен ли чекбокс

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("green")
    };

    return (
        <div className="mx-auto max-w-screen-sm">

            <div className="flex justify-between border border-gray-500 border-solid rounded-lg p-2 mt-3">
                <label className="flex items-center">
                    <Checkbox id="terms" className="w-9 rounded-full h-9" onChange={handleCheckboxChange}/>
                    <label className="ml-2 text-xl">
                        Accept terms and conditions
                    </label>
                </label>
                <div className="space-x-2.5">
                    <Button>Detail</Button>
                    <Button>Edit</Button>
                </div>

            </div>
        </div>
    );
}

export default Todos;
