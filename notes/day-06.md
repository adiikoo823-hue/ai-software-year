# Guyyaa 6
1. Function maali, maaliif fayyada?
Deebii:: Function jechuun koodii hojii murtaa'e tokko raawwatu yoo ta'u, hojii sana yeroo barbaachisutti irra deddeebinee akka fayyadamnu nu gargaara.
FKN function greet() {
    console.log("Akkam jirtu!");
}

greet();
Ibsa: greet() yeroo waamnu, ergaan "Akkam jirtu!" jedhu ni mul'ata.

2. Array maali? students[0] maal jechuudha?
Deebii:Array jechuun wantoota hedduu maqaa jijjiiruu malee bakka tokko keessatti kuusuuf fayyaduudha. students[0] jechuun elementii jalqabaa array students keessaa argamu jechuudha.
let students = ["Adinan", "Abdi", "Hana"];

console.log(students[0]);
Bu'aa:

Adinan

Hubadhu: JavaScript keessatti lakkoofsi index 0 irraa jalqaba.

students[0] → Adinan
students[1] → Abdi
students[2] → Hana

3. for loop maal hojjeta?
Deebii:for loop jechuun koodii tokko yeroo murtaa'eef irra deddeebisee hojjechuuf fayyada.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Bu'aa:

1
2
3
4
5

Ibsa:

let i = 1 → Lakkoofsa 1 irraa jalqaba.
i <= 5 → Hanga 5 ga'utti itti fufa.
i++ → Marsaa hunda irratti 1 dabala.
console.log(i) → Lakkoofsa yeroo sanaa agarsiisa.
4. Number(...) maaliif barbaachise?
Deebii:Number(...) jechuun gatii barruu (string) ta'e gara lakkoofsa (number) tti jijjiiruuf fayyada. Kunis herrega sirriitti hojjechuuf nu gargaara.
Fakkeenya:

let a = "10";
let b = "20";

console.log(a + b);

Bu'aa:

1020

Sababni isaa a fi b barruu waan ta'aniif walitti maxxanu.

Garuu yoo Number() fayyadamne:

let a = Number("10");
let b = Number("20");

console.log(a + b);

Bu'aa:

30

Hubadhu: Number() barruu lakkoofsa agarsiisu gara lakkoofsaatti jijjiira.