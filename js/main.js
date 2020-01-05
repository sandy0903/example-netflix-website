/*const tabItems =document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll('.tab-content-items');

// Select tab content item
function selectItem(e) {
	// Remove ll show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
*/
const tabItems=document.querySelectorAll(".tab-item");
const tabContents=document.querySelectorAll(".tab-content-items")

function myFunction(e){
    removeBorder();
    removeShow()
	this.classList.add("tab-border");
   
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
    
    
}
function removeBorder(){
	tabItems.forEach(item => item.classList.remove("tab-border") );
}
function removeShow(){
	tabContents.forEach(item => item.classList.remove("show"));
}
tabItems.forEach(item => item.addEventListener("click",myFunction));

