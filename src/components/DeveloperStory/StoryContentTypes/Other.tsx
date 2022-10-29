import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StoryDescription from '../StoryDescription';

interface AchievementProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	type?: string;
	imageURL?: string;
	description: string;
	url: string;
}

export default function Other({
	title = 'No title',
	type,
	imageURL,
	description,
	url,
	...props
}: AchievementProps) {
	return (
		<div className='flex flex-col gap-1 items-start pt-2 w-full'>
			<div className='flex items-center justify-start gap-2'>
				{imageURL && (
					<div className='w-24 overflow-hidden aspect-square'>
						<Image
							src={imageURL}
							alt={type}
							height={200}
							width={200}
							objectFit='cover'
						/>
					</div>
				)}
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{title}</h3>
					{type && (
						<h4 className='w-full font-normal text-sm'>
							{type}
						</h4>
					)}
				</div>
			</div>
			<StoryDescription>{description}</StoryDescription>
			{url && (
				<Link passHref href={url}>
					<a
						target='_blank'
						className='text-sm bg-white text-black px-2 py-0.5 rounded-sm'
					>
						View
					</a>
				</Link>
			)}
		</div>
	);
}
