

* We should create a google doc and put all these and your work progress, I think..


Example Site:
	https://play.dhis2.org/dev/dhis-web-interpretation/index.html
	Login: 
		UserName: system
		Password: System123

Interpretations Json:

	'Interpretation' has their source of data, that they are interpretating of.
	  They could be 'chart', 'reportTable', 'map', 'eventReport', 'eventChart'.
	  Thus, each interpretation (in json) has one of these source data in them.
	  Interpretation has 'user' info of the interpretation creator.
	  Source data also has the 'user' that created the source data.
	  

Source Images:
	In 'images/source images', I have placed all the charts/reports/etc source images.
	It should be renamed like chart1, chart2, etc..
	And based on the 'id' of source, you can have some logic to display which image.
	You can also get more images from the example site if you desire.


Search Feature:
	For 'search' part, for UI point, I have used 'material-ui' React Component.


Furthur development?:
	After the development of this,
	- We might be interested in adding 'comments' in cache or localStorage, so that we can
		mimic the saving and load saved data
	- We also might be interested in creating a 'setting' popup.
	  We can place all the different settings there, so that we can switch the data storage option,
	  some feature change options.