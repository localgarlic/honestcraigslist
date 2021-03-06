
const whatToReplace = [
	[/basement suite/gi, "mole person dwelling"],
	[/bedrooms/gi, "single person sleep units"],
	[/junior/gi, "infinitesimally small"],
	[/penthouse/gi, "box in the sky"],
	[/garden suite/gi, "garden suite but you cant garden"],
	[/perfect/gi, "blemished"],
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
	[/sublets/gi, "the current tenant is going to charge you more than she pays"],
	[/sublet/gi, "the current tenant is going to charge you more than she pays"],
	[/bachelor/gi, "perfect for a single human baby 0-6 months"],
	[/microwave/gi, "toaster with the egg-cookier on the side of it"],
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
	[/open house/gi, "desperate feeding frenzy"],
	[/house/gi, "dilapidated shed"],
	[/insuite/gi, "inside"],
	[/in suite/gi, "inside"],
	[/in-suite/gi, "inside"],
	[/en-suite/gi, "inside"],
	[/ensuite/gi, "inside"],
	[/en suite/gi, "inside"],
	[/neighborhood/gi, ""],
	[/neighbourhood/gi, ""],
	[/suite/gi, "couple of rooms in my house"],
	[/nice/gi, "fairly meh"],
	[/garage/gi, "carhole"],
	[/surrey/gi, "wastelands"],
	[/cozy/gi, "dystopianly small"],
	[/rare/gi, "common"],
	[/luxurious/gi, "middle of the road"],
	[/gorgeous/gi, "bright, bright white"],
	[/fully/gi, "all-encompassingly"],
	[/well kept/gi, "long abandoned"],
	[/cafes/gi, "starbucks"],
	[/a gym/gi, "the same gym they all have"],
	[/gym/gi, "the same gym they all have"],
	[/amenities/gi, "the same gym they all have"],
	[/close to public transit/gi, "near a designated spot to throw yourself at the mercy of the bus driver in the hopes of getting somewhere that actually matters"],
	[/close to transit/gi,"near a designated spot to throw yourself at the mercy of the bus driver in the hopes of getting somewhere that actually matters"],
	[/downtown/gi, "near bros and traffic"],
	[/down town/gi, "near bros and traffic"],
	[/family home/gi, "poor investment"],
	[/home/gi, "\"home\""],
	[/housing wanted/gi, "PICK ME, PICK ME!"],
	[/temporary/gi, "micro-term"],
	[/rooms wanted/gi, "NO ME, PICK ME!!"],
	[/ground level/gi, "basically in traffic"],
	[/real estate for sale/gi, "overpriced but somehow still profitable condos"],
	[/housing swap/gi, "house switcheroo (no takesies backsies)"],
	[/vacation rentals/gi, "timeshares"],
	[/iconic/gi, "ancient"],
	[/terrific/gi, "a nightmare"],
	[/w\/d in unit/gi, "w/d in bedroom"],
	[/craigslist/gi, "honest cl"],
	[/kijiji/gi, "honest kijiji"],
	[/gumtree/gi, "honest gumtree"],
	[/immaculate/gi, "dire"],
	[/contemporary/gi, "disintegrating"],
	[/prime/gi, "last resort"],
	[/urban/gi, "definitively suburban"],
	[/stunning/gi, "shocking"],
	[/block froms/gi, "parsecs from"],
	[/viewing/gi, "feeding frenzy"],
	[/steps to/gi, "couldn't be farther from"],
	[/fridge/gi, "vibrating icebox"],
	[/refrigerator/gi, "vibrating icebox"],
	[/washer\/dryer/gi, "loud broken box that shrinks your clothes"],
	[/washing machine/gi, "loud broken box that soaks your clothes"],
	[/clothes washer/gi, "loud broken box that soaks your cloathes"],
	[/dishwasher/gi, "loud broken box"],
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
	[/centrally located/gi, "above a gas station"],
	[/lots of storage/gi, "one closet fit for a coat. yep. just one coat"],
	[/schools/gi, "schools and other houses and nothing else"],
	[/walking distance/gi, "a $15 taxi away from"],
	[/credit check/gi, "proof you're not a grifter bum"],
	[/references/gi, "friends who will pretend to be your current landlord or employer"],
	[/reference/gi, "friends who will pretend to be your current landlord or employer"],
	[/open floor/gi, "haphazardly designed floor"],
	[/respectful/gi, "non-existant"],
	[/unique/gi, "haphazardly designed"],
	[/available now/gi, "getting desperate"],
	[/available immediately/gi, "getting desperate"],
	[/utilities included/gi, "utilites are in our name and we overcharge your portion while witholding the bill"],
	[/includes utilities/gi, "utilites are in our name and we overcharge your portion while witholding the bill"],
	[/no couples/gi, "no couples - i can't stand and bear witness to the sight of love"],
	[/utilities are included/gi, "utilites are in our name and we overcharge your portion while witholding the bill"],
	[/please/gi, ""],
	[/lease/gi, "sucker's contract"],
	[/undergound parking/gi, "unneccessarily gated underground parking"],
	[/visitor parking/gi, "one parking spot, for one visitor, shared among the entire building"],
	[/off-street parking/gi, "three off-street parking spots that eight hundred people fight over"],
	[/are OK/gi, "are tolerated... for now"],
	[/deposit/gi, "ransom"],
	[/may differ/gi, "isn't anything like"],
	[/easy access/gi, "complicated route"],
	[/backyard/gi, "owner's backyard you must never, EVER use"],
	[/generously/gi, "unfortunately"],
	[/generous/gi, "unfortunate"],
	[/executive/gi, "emancipated"],
	[/managed by/gi, "mismanaged by"],
	[/management/gi, "mismanagement"],
	[/epic/gi, "underwhelming"],
	[/funky/gi, "underwhelming"],
	[/many more/gi, "nothing else"],
	[/foyer/gi, "hallway"],
	[/hidden gem/gi, "declining monument to an area when this area was liveable"],
	[/parks/gi, "parks you can't smoke or drink in so what's the point but hey, they're there so I gotta mention them"],
	[/free/gi, "exorbitant"],
	[/vegetable garden/gi, "a pot by the windowsill to grow basil in"],
	[/a\/c/gi, "freezing wind box where the controls are in another suite"],
	[/air conditioning/gi, "freezing wind box where the controls are in another suite"],
	[/fireplace/gi, "broken fireplace"],
	[/maintained/gi, "abandoned"],
	[/painted/gi, "unprofessionaly slathered this disaster with paint to remove the last bif of character it had"],
	[/suitable for/gi, "unfit for anyone, "],
	[/lots of windows/gi, "a window"],
	[/master bedroom/gi, "master bedroom (but don't really forget who the master will be in this relationship)"],
	[/yourself/gi, "your life story"],
	[/relaxing/gi, "tepid"],
	[/quaint/gi, "boorish"],
	[/pool/gi, "pool you think you'll use but you won't. nobody ever does. nobody uses the pool"],
	[/high speed internet/gi, "56k modem"],
	[/high-speed internet /gi, "56k moden"],
	[/internet/gi, "56k modem"],
	[/cable tv/gi, "idiot box"],
	[/tv/gi, "idiot box"],
	[/cable/gi, "idiot box"],
];

chrome.storage.local.get("hcl", function(result) {
	if (result.hcl== "true") {
		run();
	}
	
	if (result.hcl== null) {
		chrome.storage.local.set({"hcl": "true"}, function() {
			run();
		  });
	}
  });

function run() {

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
}