import React from "react";
import "./styles/Footer.css";
function Footer() {
	return (
		<footer className="bg-cyan-900 py-4">
			<div className="container mx-auto py-7">
				<div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-9 grid-cols-1 gap-y-11 sm:gap-x-5 md:gap-x-0">
					<div className="text-slate-200">
						<p className="font-semibold text-xl uppercase">Perusahaan</p>
						<ul className="mt-3 flex flex-col gap-y-2 text-base">
							<li>
								<a href="">Tentang Escapade</a>
							</li>
							<li>
								<a href="">Pers</a>
							</li>
							<li>
								<a href="">Karir</a>
							</li>
							<li>
								<a href="">Hubungi Kami</a>
							</li>
						</ul>
					</div>
					<div className="text-slate-200">
						<p className="font-semibold text-xl uppercase">
							Pelajari lebih lanjut
						</p>
						<ul className="mt-3 flex flex-col gap-y-2 text-base">
							<li>
								<a href="">Pesan di Escapade</a>
							</li>
							<li>
								<a href="">Afiliasi</a>
							</li>
							<li>
								<a href="">Iklan</a>
							</li>
							<li>
								<a href="">Hotelier</a>
							</li>
							<li>
								<a href="">Kebijakan Privasi Data</a>
							</li>
							<li>
								<a href="">Ketentuan</a>
							</li>
						</ul>
					</div>
					<div className="text-slate-200">
						<p className="font-semibold text-xl uppercase">JELAJAH</p>
						<ul className="mt-3 flex flex-col gap-y-2 text-base">
							<li>
								<a href="">Petunjuk Bandara</a>
							</li>
							<li>
								<a href="">Petunjuk Maskapai</a>
							</li>
							<li>
								<a href="">Jadwal Penerbangan</a>
							</li>
							<li>
								<a href="">Jaringan Hotel</a>
							</li>
						</ul>
					</div>
					<div className="text-slate-200">
						<p className="font-semibold text-xl uppercase">UNDUH</p>
						<ul className="mt-3 flex flex-col gap-y-2 text-base">
							<li>
								<a href="">Aplikasi Escapade (IOS)</a>
							</li>
							<li>
								<a href="">Aplikasi Escapade (Android)</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center text-slate-200 py-3 text-lg font-semibold border-t-[0.2px] border-slate-400 mt-7">
					Made with &#10084; by Kelompok 4
				</p>
			</div>
		</footer>
	);
}

export default Footer;
