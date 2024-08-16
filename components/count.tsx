import Heading from './typography/heading'
import Paragraph from './typography/paragraph'
import Quote from './typography/quote'
import SubHeading from './typography/sub-heading'

export default function Count() {
	return (
		<div className="my-16">
			<Heading className="">A Glimpse into the Struggle</Heading>
			<Paragraph>
				These numbers reflect the deep impact of the struggle for justice and
				equality. As we present these figures, we remember the courage of those
				who stood against oppression and honor their enduring legacy.
			</Paragraph>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
				<div className="bg-red-100/50 p-5 rounded-2xl border">
					<SubHeading className="text-[#a53137] rounded-xl flex items-center justify-between font-bold">
						<span>Total Martyrs</span>
						<span>500+</span>
					</SubHeading>
					<Quote>
						Tragically, more than 500 students and children have lost their
						lives in the struggle for justice and equality. We honor their
						bravery and sacrifice.
					</Quote>
				</div>
				<div className="bg-amber-50 p-5 rounded-2xl border">
					<SubHeading className="text-[#755c00] rounded-xl flex items-center justify-between font-bold">
						<h1>Total Injured</h1>
						<p>33,000+</p>
					</SubHeading>
					<Quote>
						With over 33,000 injuries reported to date, the movement has seen
						immense suffering. Our thoughts are with those who have been hurt in
						the fight for a fairer future.
					</Quote>
				</div>
				<div className="bg-slate-100 p-5 rounded-2xl border">
					<SubHeading className="text-slate-700 rounded-xl flex items-center justify-between font-bold">
						<h1>Arrest & Disappear</h1>
						<p>11,000+</p>
					</SubHeading>
					<Quote>
						The crackdown on protestors has led to more than 11,000 arrests and
						disappearances. We strive to shed light on these injustices and seek
						accountability.
					</Quote>
				</div>
			</div>
		</div>
	)
}
