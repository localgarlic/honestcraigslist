
const whatToReplace = [
	[/basement suite/gi, "mole person dwelling"],
	[/bedrooms/gi, "single person sleep units"],
	[/junior/gi, "infinitesimally small"],
	[/penthouse/gi, "box in the sky"],
	[/garden suite/gi, "garden suite but you cant garden"],
	[/brand new/gi, "piece of shit"],
	[/exquisite/gi, "out of your budget"],
	[/renovated/gi, "put up a wall in the living room to fake a new bedroom"],
	[/metrotown/gi, "millenial hell"],
	[/shared bathroom/gi, "we pee together"],
	[/laneway house/gi, "small cheap house in my backyard"],
	[/laneway home/gi, "small cheap house in my backyard"],
	[/coach house/gi, "small cheap house in my backyard"],
	[/coach home/gi, "small cheap house in my backyard"],
	[/unfurnished/gi, "unfurnished"],
	[/furnished/gi, "loaded with my crappier stuff"],
	[/studio/gi, "literal shoebox"],
	[/no pets/gi, "obviously no pets"],
	[/ground floor/gi, "below stompy folks"],
	[/condo/gi, "elevated, landless box"],
	[/solarium/gi, "a single windowed room"],
	[/large/gi, "just too small"],
	[/check out/gi, "please overpay for"],
	[/stylish/gi, "overpriced yet inadequate"],
	[/quiet/gi, "desolate"],
	[/spacious/gi, "in the middle of nowhere"],
	[/convenient/gi, "inconvenient"],
	[/prestigious/gi, "with a useless doorman"],
	[/beautifully/gi, "tragically"],
	[/beautiful/gi, "moldy"],
	[/modern/gi, "tragic"],
	[/balcony/gi, "2 square foot standing area above a dumpster"],
	[/sublet/gi, "the current tenant is going to charge you more than she pays"],
	[/bachelor/gi, "perfect for a single human baby 0-6 months"],
	[/micro/gi, "micro-nano-invisi"],
	[/minutes away from/gi, "almost as far as can be from"],
	[/close to/gi, "couldn't be farther from"],
	[/shopping/gi, "H&M and the other H&M"],
	[/grocery/gi, "food troughs"],
	[/restaurants/gi, "one chinese restaurant that closed 20 years ago"],
	[/luxury/gi, "unaffordable"],
	[/affordable/gi, "unaffordable"],
	[/sought after/gi, "declining"],
	[/great/gi, "run of the mill"],
	[/ocean/gi, "puddle"],
	[/retro/gi, "squalid"],
	[/character/gi, "teardown"],
	[/clean/gi, "passably clean"],
	[/lovely/gi, "livable"],
	[/parking spots/gi, "highly competitive places in the street you can pray to stash your car after 6pm"],
	[/on acreage/gi, "in the middle of nowhere"],
	[/charming/gi, "mediocre"],
	[/plus den/gi, "plus negligible den"],
	[/no smokers/gi, "smokers are second class citizens in this country and in this house"],
	[/no smoking/gi, "smokers are second class citizens in this country and in this house"],
	[/patio/gi, "peep deck"],
	[/apartment/gi, "elevated, landless box"],
	[/apt/gi, "elevated, landless box"],
	[/townhouse/gi, "slim shed"],
	[/high end/gi, "new ten years ago"],
	[/high-end/gi, "modern 10 years ago"],
	[/house/gi, "dilapidated shed"],
	[/insuite/gi, ""],
	[/in suite/gi, ""],
	[/suite/gi, "couple of rooms in my house"],
	[/nice/gi, "fairly meh"],
	[/garage/gi, "carhole"],
	[/surrey/gi, "wastelands"],
	[/cozy/gi, "dystopianly small"],
	[/rare/gi, "common"],
	[/perfect/gi, "blemished"],
	[/luxurious/gi, "middle of the road"],
	[/gorgeous/gi, "bright, bright white"],
	[/open house/gi, "desparate feeding frenzy"],
	[/fully/gi, "all-encompassingly"],
	[/well kept/gi, "long abandoned"],
	[/gym/gi, "the same gym they all have"],
	[/amenities/gi, "the same gym they all have"],
	[/close to public transit/gi, "near a designated spot to throw yourself at the mercy of the bus driver in the hopes of getting somewhere that actually matters"],
	[/close to transit/gi,"near a designated spot to throw yourself at the mercy of the bus driver in the hopes of getting somewhere that actually matters"],
	[/downtown/gi, "near bros and traffic"],
	[/down town/gi, "near bros and traffic"],
	[/family home/gi, "poor investment"],
	[/home/gi, "very temporary dwelling"],
	[/ground level/gi, "basically in traffic"],
	[/iconic/gi, "ancient"],
	[/terrific/gi, "a nightmare"],
	[/new/gi, "piece of shit"],
	[/immaculate/gi, "dire"],
	[/contemporary/gi, "disintegrating"],
	[/prime/gi, "last resort"],
	[/urban/gi, "definitively suburban"],
	[/stunning/gi, "shocking"],
	[/block froms/gi, "parsecs from"],
	[/view/gi, "slit in the wall to peer through"],
	[/steps to/gi, "couldn't be farther from"],
	[/fridge/gi, "vibrating icebox"],
	[/refrigerator/gi, "vibrating icebox"],
	[/washer\/dryer/gi, "loud broken box that shrinks your clothes"],
	[/washing machine/gi, "loud broken box that soaks your clothes"],
	[/clothes washer/gi, "loud broken box that soaks your cloathes"],
	[/washer/gi, "loud broken box"],
	[/laundry/gi, "loud broken box that shrinks your clothes"],
	[/dryer/gi, "menacing clothes shrinker"],
	[/rancher/gi, "crumbler"],
	[/elegant/gi, "horrible"],
	[/amazing/gi, "tragic"],
	[/rooftop/gi, "voyeuristic"],
	[/roof top/gi, "voyeuristic"],
	[/legal/gi, "illegal"],
	[/fabulous/gi, "horrible"],
	[/private entrance/gi, "separate crawlhole"],
	[/equipped/gi, "previous tenants left"],
	[/sun/gi, "glare"],
	[/pet friendly/gi, "hairy carpets"],
	[/centrally located/gi, "lol"],
	[/lots of storage/gi, "one closet fit for a coat. yep. just one coat"],
	[/schools/gi, "schools and other houses and nothing else"],
	[/walking distance/gi, "a quick taxi away from"],
	[/credit check/gi, "credit check"],
	[/references/gi, "friends who will pretend to be your current landlord or employer"],
	[/respectful/gi, "non-existant"],
	[/unique/gi, "haphazardly designed"],
	[/available immediately/gi, "current tenants just left with no notice"],
	[/utilities included/gi, "utilites are in our name and we overcharge your portion while witholding the bill"],
	[/lease/gi, "sucker's contract"],
	[/off-street parking/gi, "three off-street parking spots that eight hundred people fight over"],
	[/are OK/gi, "are tolerated... for now"],
	


];

const currentURL = window.location.href;
if (currentURL.includes("craigslist") || currentURL.includes("gumtree") || currentURL.includes("kijiji")) {

	let content = document.querySelector(".content");
	if (content === null) {
		content = document.querySelector(".body")
	}

	if (content === null) {
		content = document.querySelector("body")
	}

	const parent = content.parentNode;
	const placeholder = document.createElement('div');

	// remove it from the DOM and replace it with a placeholder
	parent.replaceChild(placeholder, content);
	
	let node;

	const walk=document.createTreeWalker(content,NodeFilter.SHOW_TEXT,null,false);
	while((node=walk.nextNode())) {
		for (let [regEx, replacement] of whatToReplace) {
			node.nodeValue = node.nodeValue.replace(regEx, replacement);
		}
	}

	// swap our altered element back into the DOM
	parent.replaceChild(content, placeholder);
}