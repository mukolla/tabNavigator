jquery
======

jQuery plugins - tabNavigator

How to use:
-----------

```
<div id="wrapper">
	<div id="navigation">
		<ul class="nav-menu">
			<li></li>
			<li></li>
		</ul>
	</div>
	<hr />
	<div id="content">
		<div class="nav-tab">#1</div>
		<div class="nav-tab">#2</div>
	</div>
</div>
```


```
$('#navigation').tabNavigator({
	'tabName':'nav-tab', // Единсветнный обязательнный параметр. <div class="nav-tab">#1</div> 
	'menuActiveClass':'nav-menu-active', // имя класса который может быть добавлен к выбраному елементу меню
	'tabActiveClass':'nav-tab-active', // имя класса который может быть добавлен к активному Табу
	'startActive':'2' // Изначально активный таб. Нумерация с начинаетс с  - "0"
});
```