import React from "react";
import "./PaymentMethod.css";
export const PaymentMethod = () => {
	return (
		<div className="fixed w-screen h-screen bg-white flex z-50">
			<div className="max-w-5xl w-full mx-auto px-2 relative top-20">
				<div className="border-b-2 border-b-gray-600 flex justify-between pb-3">
					<p className="text-2xl uppercase font-semibold">Payment Method</p>
					<p className="text-2xl uppercase font-semibold">
						Voucher / Gift Card{" "}
						<span className="text-lg text-gray-400">(Optional)</span>
					</p>
				</div>
				<div className="flex mt-7 gap-x-16">
					<div className="flex flex-col gap-y-7 grow">
						<div className="flex items-center gap-x-3">
							<input
								id="transferbank"
								type="radio"
								name="group"
								className="w-5 h-5"
							/>
							<label
								htmlFor="transferbank"
								className="font-semibold text-2xl"
							>
								Transfer Bank{" "}
								<span className="text-lg text-gray-400">(free)</span>
							</label>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-x-3">
								<input
									id="virtualpay"
									type="radio"
									name="group"
									className="w-5 h-5"
								/>
								<label
									htmlFor="virtualpay"
									className="font-semibold text-2xl"
								>
									Virtual Payment{" "}
									<span className="text-lg text-gray-400">(free)</span>
								</label>
							</div>
              <img src="/visa_mastercard.png" alt="visa mastercard payment" className="h-12"/>
						</div>
					</div>
					<div className="flex basis-[23rem] flex-col items-center gap-y-7">
						<div className="flex flex-col gap-y-10">
							<p>
								Discount Voucher : Select your preferred payment method and
								enter your discount voucher in the next step.
							</p>
							<p>
								Gift Card : If your Gift Card is worth more than equal to the
								total cost of your order, select any payment method to skip this
								step and enter your code on the next page
							</p>
						</div>
						<div className="bg-gray-100 rounded-md px-4 py-6 wrapper flex flex-col gap-y-5">
							<div className="flex justify-between">
								<p>Delivery</p>
								<p>Free</p>
							</div>
							<div className="flex justify-between">
								<p>
									Total{" "}
									<span className="text-gray-400 !font-normal">
										(VAT Included)
									</span>
								</p>
								<p>Rp 1000.000</p>
							</div>
							<button className="bg-orange-500 text-center w-full py-1.5 text-white tracking-wider hover:bg-orange-700 transition-all duration-200">
								NEXT
							</button>
							<p className="!font-normal !text-base">
								You can review and confirm your order in the next step{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
