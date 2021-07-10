/**
 This problem was asked by Google.

You are given a set of synonyms, such as (big, large) and (eat, consume). 
Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

"He wants to eat food."
"He wants to consume food."
Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): consider the case of (coach, bus) and (coach, teacher).

Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?
 */

const getMap = ( synonyms ) => {
	const syn = new Map();
	synonyms.forEach( s => {
		if ( syn.has( s[ 0 ] ) ) {
			let temp = syn.get( s[ 0 ] );
			temp.push( s[ 1 ] );
			syn.set( s[ 0 ], temp );
		} else {
			syn.set( s[ 0 ], [ s[ 1 ] ] );
		}
	} );
	return syn;
}

const isSynonym = ( word1, word2, synMap ) => {
	if ( word1 === word2 ) return true;
	if ( synMap.has( word1 ) && synMap.get( word1 ).includes( word2 ) ) return true;
	if ( synMap.has( word2 ) && synMap.get( word2 ).includes( word1 ) ) return true;
	return false;
}

const checkSynonyms = ( synonyms, s1, s2 ) => {
	s1 = s1.split( ' ' );
	s2 = s2.split( ' ' );
	if ( s1.length !== s2.length ) return false;
	const synMap = getMap( synonyms );
	for ( let i = 0;i < s1.length;i++ )
		if ( ! isSynonym( s1[ i ], s2[ i ], synMap ) ) return false;
	return true;
}



const synonyms = [ [ 'big', 'large' ], [ 'eat', 'consume' ], [ 'coach', 'bus' ], [ 'coach', 'teacher' ] ];
const s1 = "He wants to teacher food.";
const s2 = "He wants to bus food.";
console.log( checkSynonyms( synonyms, s1, s2 ) );