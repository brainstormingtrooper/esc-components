# esc-components
Componente para criação de infographics onde se utiliza contadores e icons/img.

Onde esc-countupbox são as box flexíveis que encapsula  o esc-countup.html que possui os icons/img e contador.

# Propriedades
 ***esc-countupbox***
 
 **size**: Number. Define o tamanho do titulo

 **title**: String. Define o que será escrito.

***esc-countup***

 **prefixo**: *String.* Valor a ser exibido antes do contador.

 **suffix**: *String.* Valor a ser exibido após do contador.

 **inicio**: *Number, default value: 0.* Número que o contador irá iniciar.

 **fim**: *Number.* Número que o contador irá terminar.

 **casasdecimais**: *Number, default  value: 0.* Quantidade de casas decimais após a virgula.

  **separador**: *String, default value: '.'.* Separador de milhares. ex: 1.000.

  **separadordecimal**: *String, default valeu: ','.* Separador de casa decimais. ex: 0,1.

  **timer**: **Number, default value: 2.5.** Duração da contagem.

  **icon**: *String.* Icone que será exibido. Obs: utilizar icones do iron-icons.

  **src**: *String.* Ao inves de utilizar icon pode-se utilizar imagens passando o caminho da mesma.

  **font**: *String, default value: 2.5.* Tamanho da fonte do contador.

  **iconsize**: *Number, default value: 74.* tamanho dos icones/img em px. Os icones/img terão width e heigth iguais.

  **iconcolor**: *String, default value:  '#164aaf'.* Define a cor dos icones
