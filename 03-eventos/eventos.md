# Eventos

Un evento en programación es una acción que ocurre dentro de un programa, como un clic del mouse, presionar una tecla en el teclado o mover el cursor sobre un elemento de la interfaz de usuario. Estos eventos pueden ser detectados por el programa y desencadenar acciones específicas en respuesta a ellos.

### Evento CLICK

1. **Evento CLICK**: Este evento se activa cuando un elemento es clicado por el usuario.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Evento Click</title>
    <script>
      function mostrarMensaje() {
        alert('¡Haz hecho clic en el botón!')
      }
    </script>
  </head>
  <body>
    <button onclick="mostrarMensaje()">Haz clic aquí</button>
  </body>
</html>
```

### MOUSE OVER

2. **MOUSE OVER**: Se activa cuando el cursor del mouse se coloca sobre un elemento.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mouse Over</title>
    <script>
      function resaltar() {
        document.getElementById('elemento').style.backgroundColor = 'yellow'
      }
    </script>
  </head>
  <body>
    <div id="elemento" onmouseover="resaltar()">Pasa el mouse aquí</div>
  </body>
</html>
```

### MOUSE OUT

3. **MOUSEOUT**: Ocurre cuando el cursor del mouse sale de un elemento.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mouse Out</title>
    <script>
      function quitarResaltado() {
        document.getElementById('elemento').style.backgroundColor = 'white'
      }
    </script>
  </head>
  <body>
    <div id="elemento" onmouseout="quitarResaltado()" style="background-color:yellow;">Pasa el mouse aquí</div>
  </body>
</html>
```

### Focus

4. **Focus**: Este evento se dispara cuando un elemento recibe el foco, es decir, se selecciona para interactuar con él.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Focus</title>
    <script>
      function enfocar() {
        document.getElementById('input').style.backgroundColor = 'lightblue'
      }
    </script>
  </head>
  <body>
    <input id="input" onfocus="enfocar()" placeholder="Haz clic aquí" />
  </body>
</html>
```

### Blur

5. **Blur**: Se activa cuando un elemento pierde el foco.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Blur</title>
    <script>
      function quitarEnfoque() {
        document.getElementById('input').style.backgroundColor = 'white'
      }
    </script>
  </head>
  <body>
    <input id="input" onblur="quitarEnfoque()" placeholder="Haz clic aquí y luego haz clic afuera" />
  </body>
</html>
```

### Keydown

6. **Keydown**: Se dispara cuando una tecla es presionada.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Keydown</title>
    <script>
      function mostrarTecla(event) {
        alert('La tecla presionada es: ' + event.key)
      }
    </script>
  </head>
  <body onkeydown="mostrarTecla(event)">
    Presiona cualquier tecla
  </body>
</html>
```

### Keypress

7. **Keypress**: Este evento ocurre cuando una tecla es presionada y liberada.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Keypress</title>
    <script>
      function mostrarTecla(event) {
        alert('La tecla presionada es: ' + event.key)
      }
    </script>
  </head>
  <body onkeypress="mostrarTecla(event)">
    Presiona y luego suelta cualquier tecla
  </body>
</html>
```

### Keyup

8. **Keyup**: Se activa cuando una tecla es liberada después de ser presionada.

Ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Keyup</title>
    <script>
      function mostrarTecla(event) {
        alert('La tecla liberada es: ' + event.key)
      }
    </script>
  </head>
  <body onkeyup="mostrarTecla(event)">
    Presiona una tecla y luego suelta
  </body>
</html>
```
