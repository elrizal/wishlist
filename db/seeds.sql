
INSERT INTO wishlist (name) VALUES ('ipad');
INSERT INTO wishlist (name) VALUES ('Nintendo switch');
INSERT INTO wishlist (name, bought) VALUES ('ps4', true);
INSERT INTO wishlist (name, bought) VALUES ('Kingdom Hearts 3', true);
INSERT INTO wishlist (name, bought) VALUES ('Wacom tablet', true);
INSERT INTO wishlist (name) VALUES ('Mac');


CREATE TABLE wishlist
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	bought BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO wishlist (name) VALUES ('iPad');
INSERT INTO wishlist (name) VALUES ('Nintendo Switch');
INSERT INTO wishlist (name, bought) VALUES ('PS4', true);
INSERT INTO wishlist (name, bought) VALUES ('Kingdom Hearts 3', true);
INSERT INTO wishlist (name, bought) VALUES ('Wacom tablet', true);
INSERT INTO wishlist (name) VALUES ('iMac');

ALTER TABLE wishlist
ADD link varchar(500);

ALTER TABLE wishlist
ADD description varchar(500);

UPDATE wishlist SET description = "Just want the 10 inch one!", link = "https://www.bestbuy.com/site/apple-ipad-latest-model-with-wi-fi-32gb-gold/5201400.p?skuId=5201400" WHERE id = 1;

UPDATE wishlist SET description = "Only the best", link = "https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/5670100.p?skuId=5670100" WHERE id = 2;

UPDATE wishlist SET name= "Wacom - Intuos Drawing Tablet", description = "The only model in my budget", link = "https://www.bestbuy.com/site/wacom-intuos-drawing-tablet-small-with-3-bonus-software-included-black/6196636.p?skuId=6196636" WHERE id = 5;

UPDATE wishlist SET description = "Only for the hype...", link = "https://www.bestbuy.com/site/searchpage.jsp?st=kingdom+hearts+3&_dyncharset=UTF-8&id=pcat17071&type=page&sc=Global&cp=1&nrp=&sp=&qp=&list=n&af=true&iht=y&usc=All+Categories&ks=960&keys=keys" WHERE id = 4;

UPDATE wishlist SET  description = "Need an update", link = "https://www.apple.com/shop/buy-mac/imac/21.5-inch-3.0ghz-1tb?afid=p238%7Cs7GTcMNvV-dc_mtid_1870765e38482_pcrid_246386726055_&cid=aos-us-kwgo-pla-mac--slid----product-MNDY2LL/A" WHERE id = 6;

