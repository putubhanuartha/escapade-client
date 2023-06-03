import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Invoice = ({ showInvoice, setshowInvoice }) => {
	return (
		<div className="fixed flex w-screen h-screen top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-50">
			<div className="m-auto px-4 max-w-2xl w-full py-10 bg-gray-50  rounded-md">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-2xl">Invoice</p>
					<button
						onClick={() => {
							setshowInvoice(!showInvoice);
						}}
					>
						<AiOutlineCloseCircle size={30} />
					</button>
				</div>
                <div className="flex flex-col items-center gap-y-8">
                        <p className="font-semibold text-green-500 text-2xl">Payment Successfull !!!</p>
                        <img src="/checklist.png" alt="checklist" className="w-28 h-28 object-cover"/>
                        <div className="max-w-sm w-full flex flex-col gap-y-3">
                            <div className="flex justify-between">
                                <p className="font-semibold">Payment Type: </p>
                                <p>Transfer Bank</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Payment Provider: </p>
                                <p>Bank Mandiri</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Payment id:</p>
                                <p className="uppercase">01920912AOSHD0210</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Amount paid:</p>
                                <p>Rp. 1000.000</p>
                            </div>
                        </div>
                        <a href="/" className="bg-cyan-700 text-white px-7 font-semibold py-1.5 rounded-lg">Home</a>
                </div>
			</div>
		</div>
	);
};

export default Invoice;
