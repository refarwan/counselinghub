"use client";

import TextField from "@/components/Textfiled";

import Link from "next/link";

import { BsPuzzleFill } from "react-icons/bs";

const Page = () => {
	return (
		<>
			<main className="px-[16px] pt-[56px]">
				<div className="flex flex-col gap-[16px] sm:w-[332px] xl:w-[428px] m-auto">
					<div className="text-sky-500 flex flex-col items-center">
						<BsPuzzleFill size={48} />
						<span className="text-[30px]">
							Konseling<span className="font-bold">HUB</span>
						</span>
					</div>
					<div className="flex gap-[5px] flex-col">
						<h1 className="font-semibold text-[30px]">Masuk</h1>
						<p>Masuk dan gunakan akun kamu</p>
					</div>
					<TextField
						type="text"
						name="email"
						label="Email atau nomor telepon"
					/>
					<TextField type="password" name="password" label="Kata sandi" />
					<Link href={"/lupa-sandi"} className="w-max text-sky-500">
						Lupa Sandi?
					</Link>
					<div className="flex justify-end gap-[16px]">
						<Link href={"/daftar"} className="text-button">
							Daftar
						</Link>
						<button className="filled-button">Masuk</button>
					</div>
				</div>
			</main>
			<footer className="text-[12px] text-center mt-[56px] mb-[5px]">
				Copyright &copy; Teman Dengar 2024
			</footer>
		</>
	);
};

export default Page;
