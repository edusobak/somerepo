// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Dialog"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","top"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// PANEL1
// ======
var panel1 = group1.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Product"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

var statictext = panel1.add("statictext", undefined, undefined, {name: "statictext"}); 
    statictext.text = "Name:"; 

var productname = panel1.add('edittext {properties: {name: "productname"}}'); 
    productname.preferredSize.width = 127; 

var statictext1 = panel1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Size:"; 

// GROUP2
// ======
var group2 = panel1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var formatx = group2.add('edittext {properties: {name: "formatx"}}'); 
    formatx.text = "50"; 
    formatx.preferredSize.width = 50; 

var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "×"; 

var formaty = group2.add('edittext {properties: {name: "formaty"}}'); 
    formaty.text = "50"; 
    formaty.preferredSize.width = 50; 

// GROUP3
// ======
var group3 = panel1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var statictext3 = group3.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Roll width:"; 

var rollwidth = group3.add('edittext {properties: {name: "rollwidth"}}'); 
    rollwidth.text = "520"; 
    rollwidth.preferredSize.width = 50; 

// PANEL1
// ======
var checkbox1 = panel1.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "Magnetics"; 
    checkbox1.value = true; 

// GROUP4
// ======
var group4 = panel1.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext4 = group4.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Min X gap:"; 

var minxgap = group4.add('edittext {properties: {name: "minxgap"}}'); 
    minxgap.text = "3"; 
    minxgap.preferredSize.width = 40; 

// GROUP5
// ======
var group5 = panel1.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext5 = group5.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Y gap:"; 

var ygap = group5.add('edittext {properties: {name: "ygap"}}'); 
    ygap.text = "3"; 
    ygap.preferredSize.width = 40; 

// PANEL2
// ======
var panel2 = group1.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Print machine"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

var markandy = panel2.add("checkbox", undefined, undefined, {name: "markandy"}); 
    markandy.text = "Mark Andy"; 

var comco1 = panel2.add("checkbox", undefined, undefined, {name: "comco1"}); 
    comco1.text = "Comco 1"; 

var comco2 = panel2.add("checkbox", undefined, undefined, {name: "comco2"}); 
    comco2.text = "Comco 2"; 

var comexi1 = panel2.add("checkbox", undefined, undefined, {name: "comexi1"}); 
    comexi1.text = "Comexi 1"; 

var comexi2 = panel2.add("checkbox", undefined, undefined, {name: "comexi2"}); 
    comexi2.text = "Comexi 2"; 

var lombardi430 = panel2.add("checkbox", undefined, undefined, {name: "lombardi430"}); 
    lombardi430.text = "Lombardi 430"; 

var lombardi530 = panel2.add("checkbox", undefined, undefined, {name: "lombardi530"}); 
    lombardi530.text = "Lombardi 530"; 

var divider1 = panel2.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// GROUP6
// ======
var group6 = panel2.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var statictext6 = group6.add("group"); 
    statictext6.orientation = "column"; 
    statictext6.alignChildren = ["left","center"]; 
    statictext6.spacing = 0; 

    statictext6.add("statictext", undefined, "Можно указать", {name: "statictext6"}); 
    statictext6.add("statictext", undefined, "валы вручную", {name: "statictext6"}); 
    statictext6.add("statictext", undefined, "через запятую", {name: "statictext6"}); 

// PANEL2
// ======
var customrollstxt = panel2.add('edittext {properties: {name: "customrollstxt"}}'); 
    customrollstxt.preferredSize.width = 130; 

// DIALOG
// ======
var okbutton = dialog.add("button", undefined, undefined, {name: "okbutton"}); 
    okbutton.text = "OK"; 

dialog.show();



var countx;
var customrolls = [];
var rolls = [];

var markandyrolls = [304.8, 349.25, 381, 384.18, 390.53, 406.4, 419.1, 431.8, 457.2, 508, 514.35, 539.75];
var markandymagneticrolls = [304.8, 406.4, 431.8, 457.2, 609.6];
var comco1rolls = [304.8, 355.6, 406.4, 457.2, 508, 600.075];
var comco1magneticrolls = [304.8, 355.6, 406.4, 457.2, 508];
var comco2rolls = [304.8, 330.2, 384.18, 387.35, 393.7, 400.05, 434.98, 450.85, 463.55, 571.5, 609.6, 635, 641.35, 730.25, 736.6, 800.1];
var comco2magneticrolls = [387.35, 434.98, 463.55, 571.5, 635];
var comexi1rolls = [260, 270, 274, 280, 290, 300, 303, 310, 320, 330, 340, 345, 350, 360, 370, 380, 390, 400, 410, 420, 425, 430, 440, 450, 460, 470, 490, 500, 560, 600];
var comexi1magneticrolls = [410, 420, 430, 440, 470, 500, 560, 600];
var comexi2rolls = [350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800];
var comexi2magneticrolls = [410, 420, 430, 440, 470, 500, 560, 600];
var lombardi430rolls = [254, 304.8, 355.6, 406.4, 457.2, 508, 609.6];
var lombardi430magneticrolls = [254, 304.8, 355.6, 406.4, 457.2, 508, 609.6];
var lombardi530rolls = [254, 304.8, 355.6, 381, 406.4, 457.2, 508, 533.4, 558.8, 609.6];
var lombardi530magneticrolls = [254, 304.8, 355.6, 381, 406.4, 457.2, 508, 533.4, 558.8, 609.6];

// задаю переменную булеан чтобы понимать нужно ли под заданные вручную валы расчёт делать или нет
var needcustom = false;
// если какой-то текст есть в поле под ручное указание валов, то
if (customrollstxt.text.length > 0) {
	var needcustom = true;
	// превращаю в массив строку с кастом роллами и превращаю все значения в float
	var customrolls = customrollstxt.text.split(',');
	for (i = 0; i < customrolls.length; i++) {
		customrolls[i] = parseFloat(customrolls[i]);
	}
}

// формирую общий массив валов исходя из того, что выбрано
// с магнетиками
if (checkbox1.value) {
	if (markandy.value) {
		rolls = rolls.concat(markandymagneticrolls);
	}
	if (comco1.value) {
		rolls = rolls.concat(comco1magneticrolls);
	}
	if (comco2.value) {
		rolls = rolls.concat(comco2magneticrolls);
	}
	if (comexi1.value) {
		rolls = rolls.concat(comexi1magneticrolls);
	}
	if (comexi2.value) {
		rolls = rolls.concat(comexi2magneticrolls);
	}
	if (lombardi430.value) {
		rolls = rolls.concat(lombardi430magneticrolls);
	}
	if (lombardi530.value) {
		rolls = rolls.concat(lombardi530magneticrolls);
	}
	if (needcustom) {
		rolls = rolls.concat(customrolls);
	}
}
// без магнетиков
else {
	if (markandy.value) {
		rolls = rolls.concat(markandyrolls);
	}
	if (comco1.value) {
		rolls = rolls.concat(comco1rolls);
	}
	if (comco2.value) {
		rolls = rolls.concat(comco2rolls);
	}
	if (comexi1.value) {
		rolls = rolls.concat(comexi1rolls);
	}
	if (comexi2.value) {
		rolls = rolls.concat(comexi2rolls);
	}
	if (lombardi430.value) {
		rolls = rolls.concat(lombardi430rolls);
	}
	if (lombardi530.value) {
		rolls = rolls.concat(lombardi530rolls);
	}
	if (needcustom) {
		rolls = rolls.concat(customrolls);
	}
}

// удаляем дубли из массива валов
removeDuplicate(rolls);

// функция для удаления дублей из массива
function removeDuplicate(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (i != j && a[i] == a[j]) {
                a.splice(j, 1);
            }
        }
    }
    return a;
}

alert("DEBUG\nРасчёт будет производиться на валы: " + rolls);

var xgap = parseFloat(minxgap.text);

var xgapsarr = [];
var xgapsarrroll = [];

for (i = 0; i < rolls.length; i++) {
	var countx = Math.floor(rolls[i] / (parseFloat(formatx.text) + parseFloat(minxgap.text)));
	var xgap = rolls[i] / countx - parseFloat(formatx.text);
	xgapsarrroll.push(rolls[i]);
	xgapsarr.push(xgap);
}
var xgap = Math.min.apply(null, xgapsarr);
alert("DEBUG\nВсе значения: " + xgapsarr + "\nНаименьшее значение больше " + parseFloat(minxgap.text) + ": " + xgap + " для вала: " + rolls[indexOf(xgapsarr, xgap)])


function indexOf(array, item) {
	for (i = 0; i < array.length; i++) {
		if (array[i] == item){
			return i;
		}
	}
};

// переназначаю переменные, у меня переменные формы назывались также как переменные для значений из этих форм
var doc = app.activeDocument;
// вычисляю индекс первого значения xgap и по этому же индексу беру вал
var printrepeat = rolls[indexOf(xgapsarr, xgap)];
// вычисляю сколько там штук помещаться должно
countx = Math.floor(printrepeat / (parseFloat(formatx.text) + parseFloat(minxgap.text)));

app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
rollwidth = parseFloat(rollwidth.text);
ygap = parseFloat(ygap.text);
formatx = parseFloat(formatx.text);
formaty = parseFloat(formaty.text);

function mm(n){
	return n * 2.83464567;
}

// считаем сколько влезает штук по ширине материала
var county = Math.floor((rollwidth - 15)/(formaty + ygap))
// определяем какой отступ получается сверху и снизу 
var otstupverhniz = (rollwidth - (county * formaty + (county - 1) * ygap)) / 2

var artboardrect = doc.pathItems.rectangle(0, 0, mm(printrepeat), mm(rollwidth));
doc.artboards[0].artboardRect = artboardrect.geometricBounds;

var newColor = new CMYKColor();  
newColor.cyan = 0;  
newColor.magenta = 100;  
newColor.yellow = 0;  
newColor.black = 0;

artboardrect.strokeColor = newColor;

var startx = mm(xgap/2)
var starty = mm(-otstupverhniz)

for (var j = 0; j < county; j++){
	for (var i = 0; i < countx; i++){
		var rect = doc.pathItems.rectangle(starty, startx, mm(formatx), mm(formaty));
		startx = startx + mm(formatx) + mm(xgap);
	}
	startx = mm(xgap/2)
	starty = starty - mm(ygap) - mm(formaty);
}

// определить для каких печатных машин подходит раскладка
var resultmachines = [];

if (contains(markandyrolls, printrepeat)) {
	resultmachines.push(" Mark Andy");
}
if (contains(comco1rolls, printrepeat)) {
	resultmachines.push(" Comco-1");
}
if (contains(comco2rolls, printrepeat)) {
	resultmachines.push(" Comco-2");
}
if (contains(comexi1rolls, printrepeat)) {
	resultmachines.push(" Comexi-1");
}
if (contains(comexi2rolls, printrepeat)) {
	resultmachines.push(" Comexi-2");
}
if (contains(lombardi430rolls, printrepeat)) {
	resultmachines.push(" Lombardi 430");
}
if (contains(lombardi530rolls, printrepeat)) {
	resultmachines.push(" Lombardi 530");
}

// импорт болванки текстовых фреймов
embedPDF("c:/Users/VA/Documents/iif/tmp1/raskladinfoblank.ai");
app.executeMenuCommand("ungroup");
app.executeMenuCommand("releaseMask");
app.executeMenuCommand("group");

for (var i = 0; i < doc.selection[0].textFrames.length; i++) {
    var t = doc.selection[0].textFrames[i];
	if (t.contents == "1") {
		t.story.textRange.justification = Justification.CENTER;
		var txt = t.contents.replace("1", "Label Size " + formatx + " × " + formaty + " mm");
		t.contents = txt;
	}
	if (t.contents == "2") {
		t.story.textRange.justification = Justification.CENTER;
		var txt = t.contents.replace("2", printrepeat + " mm print repeat");
		t.contents = txt;
	}
	if (t.contents == "3") {
		t.story.textRange.justification = Justification.CENTER;
		var txt = t.contents.replace("3", productname.text);
		t.contents = txt;
	}
	if (t.contents == "4") {
		t.story.textRange.justification = Justification.CENTER;
		var txt = t.contents.replace("4", printrepeat + " × " + rollwidth + " mm");
		t.contents = txt;
	}
	if (t.contents == "5") {
		t.story.textRange.justification = Justification.CENTER;
		var txt = t.contents.replace("5", countx * county + " ps.");
		t.contents = txt;
	}
	if (t.contents == "6") {
		t.story.textRange.justification = Justification.CENTER;
		var countsqm;
		countsqm = 1/((printrepeat/1000)*(rollwidth/1000)) * (countx * county);
		var txt = t.contents.replace("6", "1 m² – " + Math.round(countsqm) + " ps.");
		t.contents = txt;
	}
	if (t.contents == "7") {
		t.story.textRange.justification = Justification.LEFT;
		var txt = t.contents.replace("7", getDate());
		t.contents = txt;
	}
	if (t.contents == "8") {
		t.story.textRange.justification = Justification.LEFT;
		var txt = t.contents.replace("8", resultmachines);
		t.contents = txt;
	}
}

doc.selection[0].position = [mm(printrepeat) / 2 - mm(381) / 2, mm(rollwidth) / 2 - mm(520) / 2];

// рисуем отметку расстояния между этикетками 
// var xgaprect = doc.pathItems.rectangle(mm(-otstupverhniz), mm(xgap/2) + mm(formatx), mm(xgap), mm(6));
var x = doc.textFrames.add();
x.contents = xgap.toFixed(2);
x.lines[0].justification = Justification.LEFT;
x.lines[0].characterAttributes.size = 23;
x.lines[0].characterAttributes.fillColor = newColor;
x.position = [mm(xgap) + mm(formatx - 1.5), mm(-otstupverhniz + 8)];

var myLine = doc.pathItems.add();
myLine.stroked = true;
myLine.strokeColor = newColor;
myLine.strokeWidth = mm(1);
//myLine.setEntirePath([[mm(xgap/2) + mm(formatx), mm(-otstupverhniz)], [mm(xgap/2) + mm(formatx), mm(-otstupverhniz - 4)], [mm(xgap/2) + mm(formatx) + mm(xgap), mm(-otstupverhniz - 4)], [mm(xgap/2) + mm(formatx) + mm(xgap), mm(-otstupverhniz)]]);
myLine.setEntirePath([[mm(xgap/2) + mm(formatx), mm(-otstupverhniz)], [mm(xgap/2) + mm(formatx), mm(-otstupverhniz - 4)], [mm(xgap/2) + mm(formatx), mm(-otstupverhniz - 8)], [mm(xgap/2) + mm(formatx), mm(-otstupverhniz - 4)], [mm(xgap/2) + mm(formatx) + mm(xgap), mm(-otstupverhniz - 4)], [mm(xgap/2) + mm(formatx) + mm(xgap), mm(-otstupverhniz)], [mm(xgap/2) + mm(formatx) + mm(xgap), mm(-otstupverhniz - 8)]]);

function embedPDF(dest) {
  var embedDoc = new File(dest);
  if (app.documents.length > 0 && embedDoc.exists) {
    var doc = app.activeDocument;
    var placed = doc.groupItems.createFromFile(embedDoc);
  }
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

function getDate(){
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth()+1)+ '/' +today.getFullYear(); 
    return date;
}