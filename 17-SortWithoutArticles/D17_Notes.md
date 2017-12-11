# Day 17 - Sorting Band Names Without Articles

The object of this lesson is to sort band names in the bands array alphabetically. The tricky part is to sort them excluding articles of speech: a, the, and an. Once we have the bands properly sorted we will add each band as a list item to the page.

1. Declare a variable that holds the array of band names: bands.
2. Create variable to store sortedBands using sort()
3. Create function to replace 'the', 'a', 'an' with '' using regex.
4. implement strip function in sort if statement.

Using strip function in the sort if statement only strips/trims the articles 'the', 'a', and 'an' during the compare process of the sort method. The final output still maintains the original band name in its entirety. You can find out more about that sort method [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort, "MDN Array.prototype.sort()").

### Twisted Possibilities:
* Dr Who Bestiary list.
* Star Wars - Factions list
* SciFi Ship Catalog
* Possibly click to sort option
