// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {NodeProp} from "@lezer/common"
const spec_Identifier = {__proto__:null,pragma:12, circom:14, include:20, signal:26, input:28, output:30, var:114, component:122, main:126, public:132, assert:180, log:184, return:188, function:192, template:202, parallel:204, if:210, else:218, for:226, while:240}
export const parser = LRParser.deserialize({
  version: 13,
  states: "JlO!jQPOOO!qQPO'#CpO#SQPO'#CoO!qQPO'#CuO$iQQO'#FXOOQO'#F_'#F_O%SQPO'#DROOQO'#Fg'#FgO'OQQO'#DYOOQO'#F^'#F^O(XQQO'#F^OOQO'#FY'#FYO)rQPO'#CnOOQO'#FX'#FXOOQO'#F}'#F}O)wQPO'#EOOOQO'#GX'#GXO)|QPO'#ESOOQO'#FW'#FWOOQO'#Gf'#GfO*XQPO'#E|OOQO'#E|'#E|O*^QPO'#FVQOQPOOO*hQPO'#C`O*mQPO'#CeO*rQPO'#ChO*}QPO'#DfO+SQPO'#DjO+[QPO'#EXO+aQPO'#EZO+fQPO'#E]O+tQPO'#E_O+yQPO'#EdO,RQPO'#EhO,WQPO'#EpO,]QPO'#EwO,bQPO,59[O,mQQO,59cO,tQQO'#DYO!qQPO,59_O!qQPO,59`O-UQPO,59aO#_QQO'#CvO%SQPO,59dO%SQPO,59eO%SQPO,59fO%SQPO,59gO%SQPO,59hO%SQPO,59iO%SQPO,59jO%SQPO,59kO%SQPO,59lO%SQPO,59nO%SQPO,59oO%SQPO,59pO+fQPO,59bO+fQPO,59yO+fQPO,59zO+fQPO,59{O+fQPO,59|O+fQPO,59}O+fQPO'#CwO._QQO,59mO/[QPO'#DWOOQO,59q,59qO/cQPO'#DZO!qQPO'#D[OOQO'#FP'#FPO1UQQO,59tO1]QQO,59tO1mQPO,5:^O!qQPO,5:_O!qQPO,5:`O!qQPO,5:aO!qQPO,5:bO!qQPO,5:cO!qQPO,5:dO!qQPO,5:eOOQO,5:f,5:fOOQO,5:g,5:gO!qQPO,5:hO!qQPO,5:iO!qQPO,5:kO!qQPO,5:lO!qQPO,5:mO!qQPO,5:oO!qQPO,5:qO+fQPO,59YOOQO,5:j,5:jO1tQPO,5:nO1tQPO,5:pO!qQPO,5:rOOQO,5;h,5;hOOQO-E8z-E8zO1yQQO,58zOOQO,59P,59PO2OQPO,59SO2ZQPO,59SO2`QPO,5:QO2nQPO,5:UO2|QPO,5:WO!qQPO,5:sO!qQPO,5:uO3|QPO,5:wO4WQPO'#DYO5zQPO,5:yO5zQPO,5;OO6PQPO,5;OO!qQPO,5;SO6UQPO,5;[O!qQPO,5;cOOQO1G.v1G.vOOQO1G.}1G.}O8dQQO,59tOOQO1G.y1G.yO8zQPO1G.zO:ZQQO1G/OO<OQQO1G/PO>PQQO1G/QOOQO1G/R1G/RO?tQQO1G/SOAiQQO1G/TOC^QQO1G/UODiQQO1G/VOFaQQO1G/WOHRQQO1G/YOI|QQO1G/ZOKqQQO1G/[OLnQPO1G.|OMRQPO1G/eOMfQPO1G/fOMyQPO1G/gON^QPO1G/hONqQPO1G/iO! UQPO,59cO! ]QPO'#FnOOQO'#DX'#DXO! eQPO,59rOOQO,59u,59uO! jQPO,59vOOQO-E8}-E8}O1mQPO1G/xO!#PQQO1G/`O!#mQPO'#DhOOQO'#Fz'#FzOOQO1G/x1G/xOOQO1G/y1G/yOOQO1G/z1G/zOOQO1G/{1G/{OOQO1G/|1G/|OOQO1G/}1G/}OOQO1G0O1G0OOOQO1G0P1G0POOQO1G0S1G0SOOQO1G0T1G0TOOQO1G0V1G0VOOQO1G0W1G0WOOQO1G0X1G0XOOQO1G0Z1G0ZOOQO1G0]1G0]O!#wQPO'#DdO!$OQPO1G.tO!$TQPO'#DYOOQO1G0Y1G0YOOQO1G0[1G0[OOQO1G0^1G0^OOQO1G.f1G.fO!qQPO'#ClOOQO'#E}'#E}O!$cQPO1G.nO!$cQPO1G.nO!$nQPO1G/lO1mQPO1G/lO!$|QPO1G/pO!%XQPO1G/pO!%^QPO'#DnO!%XQPO1G/rO!%cQPO1G/rO!%hQPO1G0_O!%sQPO1G0aO!&OQQO1G0aO!&VQPO,59mO!&|QPO,59tO!&|QPO,59tO!'^QPO'#EaO!'fQPO1G0eO!'kQPO1G0jO5zQPO1G0jO!'pQPO'#EjO!'{QPO1G0nOOQO'#Er'#ErO!(QQPO1G0vO!(VQPO'#EyO!(bQPO1G0}O!qQPO'#FOO!(gQPO,5<YOOQO1G/^1G/^OOQO1G/b1G/bOOQO7+%d7+%dO!(oQPO'#F{OOQO'#Di'#DiO!(wQPO,5:SO+fQPO7+$`O!(|QPO,59WOOQO-E8{-E8{O!)RQPO7+$YO1mQPO7+%WOOQO7+%W7+%WO!)^QPO'#DVOOQO7+%[7+%[O!)cQPO,5:YOOQO7+%^7+%^O!%XQPO7+%^OOQO7+%y7+%yOOQO7+%{7+%{O!)hQPO1G/OO!*XQPO1G/PO!*xQPO1G/QO!+]QPO1G/SO!+pQPO1G/TO!,TQPO1G/UO!,hQPO1G/VO!.YQPO1G/WO!/tQPO1G/YO!0qQPO1G/ZO!1hQPO1G/[O!2_QPO1G/`O!2oQPO'#F|OOQO'#Eb'#EbO!2zQPO,5:{O!3PQPO7+&PO!3PQPO7+&UO!3WQPO7+&UO!3]QPO7+&YO!qQPO7+&bO!3dQPO7+&iOOQO,5;j,5;jOOQO-E8|-E8|O1mQPO'#FQO!3kQPO,5<gOOQO1G/n1G/nO!3sQPO'#DeOOQO<<Gz<<GzOOQO1G.r1G.rOOQO<<Hr<<HrO!4^QPO1G/tOOQO<<Hx<<HxO!4fQPO'#FRO!4kQPO,5<hOOQO1G0g1G0gOOQO'#Ec'#EcO!4vQPO<<IkOOQO'#Eg'#EgO!4{QPO<<IpO!3PQPO<<IpO!5QQPO'#EkOOQO'#Gg'#GgO!3PQPO'#GgO!5VQPO<<ItO!6mQPO'#EsO!6xQPO<<I|O!6}QPO'#EzOOQO'#Gj'#GjO!3PQPO'#GjOOQO<<JT<<JTOOQO,5;l,5;lOOQO-E9O-E9OO!7SQPO7+%`OOQO,5;m,5;mOOQO-E9P-E9POOQOAN?VAN?VOOQOAN?[AN?[O!7XQPOAN?[OOQO,5;V,5;VOOQO'#El'#ElO!7^QPO,5=RO!7cQPOAN?`O6UQPOAN?hOOQO,5;f,5;fOOQO'#E{'#E{O!7jQPO,5=UO!7oQPO<<HzOOQOG24vG24vOOQO1G2m1G2mO!7tQPO'#EnOOQO'#Gh'#GhO!3PQPO'#GhOOQOG24zG24zOOQO'#Et'#EtO!7yQPOG25SOOQO1G2p1G2pOOQOAN>fAN>fOOQO,5;Y,5;YOOQO'#Eo'#EoO!8OQPO,5=SO!8TQPOLD*nOOQO1G2n1G2nO!8[QPO'#EuOOQO'#Gi'#GiO!3PQPO'#GiOOQO!$'NY!$'NYOOQO,5;a,5;aOOQO'#Ev'#EvO!8aQPO,5=TOOQO1G2o1G2oO+fQPO'#DRO+fQPO,59dO+fQPO,59eO+fQPO,59fO+fQPO,59gO+fQPO,59hO+fQPO,59iO+fQPO,59jO+fQPO,59kO+fQPO,59lO+fQPO,59nO+fQPO,59oO+fQPO,59p",
  stateData: "!8f~O#xOSPOSQOS~OTWOUhOYiO]jOePO!QXO!ZkO!_lO!|mO#OnO#QoO#SpO#XqO#]rO#esO#ltO$PRO$^UO%O_O~O#v#yP~P]OTwOePO!QXO$PRO$^UO~O#}xO$OyO$kcX~O$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$[!TO$]!UO$_!VO$`!WO$a!XO$e!YO$f!ZO$g![O$h!]O$i!^O$j!_O~O%S#{X%U#{X%W#{Xf#{X$c#{X!P#{X%X#{X~P#_OTwOe!`O!QXO$^UO~Oa!eOe!bO$d!dO$S|X$T|X$U|X$V|X$W|X$X|X$Y|X$[|X$]|X$_|X$`|X$a|X$e|X$f|X$g|X$h|X$i|X$j|X%S|X%U|X%W|X~O$m!iO$r!jO$s!kO$t!lO$u!mO$v!nO$w!oO$x!pO$y!qO$z!rO$|!sO$}!tO%P!uO%Q!vO%R!wO%T|X%V|X~P%bO%T!xO%V!yO$S$QX$T$QX$U$QX$V$QX$W$QX$X$QX$Y$QX$[$QX$]$QX$_$QX$`$QX$a$QX$e$QX$f$QX$g$QX$h$QX$i$QX$j$QX%S$QX%U$QX%W$QX~O$k!zO~OT!{O~O%S!|O%U!}O%W#OO~O%X#PO~O#v#yX!e#yX~P]OV#RO~OZ#SO~OT#TO^#UO_#UO~OT#VO~OT#WO!a#XO~Oe#YO~Oe#ZO~OT#]Oe!`O!QXO$^'nO~OT#^O~OT#_O#Y#`O~Oe#aO~Oe#bO~Oe#cO~Of#dO#}xO$OyO~Of#eO~P#_Of|X$c|X!P|X%X|X~P%bO#}xO$OyO$kiafia%Xia~O$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$[!TO$]!UO$_!VO$`!WO$a!XO~O$eua$fua$gua$hua$iua$jua%Sua%Uua%Wuafua$cua!Pua%Xua~P-gOf$bP~P!qOT$PO~Oa!eO$S|a$T|a$U|a$V|a$W|a$X|a$Y|a$[|a$]|a$_|a$`|a$a|a$e|a$f|a$g|a$h|a$i|a$j|a%S|a%T|a%U|a%V|a%W|a~O$m$SO~P/hOf|a$c|a!P|a%X|a~P/hOa$UO~P!qOT$iO~OW$mO~Oa$nO%X[af[a~OT$qO~Oa$nO$m$sO%X!Yaf!Ya~Oa$nO$m$uO%X!^af!^a~O!c$vO$m$wO~O$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO$['vO$]'wO$_'xO$`'yO$a'zO~O%X#Paf#Pa~P3UOa!eOe!bO$d!dO$S|X$T|X$U|X$V|X$W|X$X|X$Y|X$[|X$]|X$_|X$`|X$a|X%X|X#}|X$O|X$k|Xf|X$l|X%S|X%U|X%W|X$c|X!P|X~Oe%PO~OT%SO~OTWOUhOYiO]jOePO!QXO!ZkO!_lO!|mO#OnO#QoO$PRO$^UO%O_O~Oa!eOf|a$S|a$T|a$U|a$V|a$W|a$X|a$Y|a$[|a$]|a$_|a$`|a$a|a%S|a%U|a%W|a$c|a!P|a%X|a~O$e|a$f|a$g|a$h|a$i|a$j|a~P7SO#}xO$Ohi$khifhi%Xhi~O$Sli$Tli$[li$]li$_li$`li$ali%Sli%Uli%Wlifli$cli!Pli%Xli~O$U!OO$V!PO$W!QO$X!RO$Y!SO$eli$fli$gli$hli$ili$jli~P9]O$Smi$Tmi$[mi$]mi$_mi$`mi$ami%Smi%Umi%Wmifmi$cmi!Pmi%Xmi~O$U!OO$V!PO$W!QO$X!RO$Y!SO$emi$fmi$gmi$hmi$imi$jmi~P;QO$Sni$Tni$Uni$Wni$Xni$Yni$[ni$]ni$_ni$`ni$ani%Sni%Uni%Wnifni$cni!Pni%Xni~O$V!PO$eni$fni$gni$hni$ini$jni~P<uO$Spi$Tpi$Upi$Wpi$Xpi$Ypi$[pi$]pi$_pi$`pi$api%Spi%Upi%Wpifpi$cpi!Ppi%Xpi~O$V!PO$epi$fpi$gpi$hpi$ipi$jpi~P>jO$Sqi$Tqi$Uqi$Wqi$Xqi$Yqi$[qi$]qi$_qi$`qi$aqi%Sqi%Uqi%Wqifqi$cqi!Pqi%Xqi~O$V!PO$eqi$fqi$gqi$hqi$iqi$jqi~P@_O$Sri$Tri$Uri$Wri$Xri$Yri$[ri$]ri$_ri$`ri$ari%Sri%Uri%Wrifri$cri!Pri%Xri~O$V!PO$eri$fri$gri$hri$iri$jri~PBSO$[si$]si$_si%Ssi%Usi%Wsifsi$csi!Psi%Xsi~O$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$`!WO$a!XO$esi$fsi$gsi$hsi$isi$jsi~PCwO$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$[!TO$_!VO$`!WO$a!XO~O$]ti$eti$fti$gti$hti$iti$jti%Sti%Uti%Wtifti$cti!Pti%Xti~PElO$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$[!TO$`!WO$a!XO~O$]vi$_vi$evi$fvi$gvi$hvi$ivi$jvi%Svi%Uvi%Wvifvi$cvi!Pvi%Xvi~PGaO$[wi$]wi$_wi$`wi$awi%Swi%Uwi%Wwifwi$cwi!Pwi%Xwi~O$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$ewi$fwi$gwi$hwi$iwi$jwi~PIUO$[xi$]xi$_xi$`xi$axi%Sxi%Uxi%Wxifxi$cxi!Pxi%Xxi~O$S|O$T}O$U!OO$V!PO$W!QO$X!RO$Y!SO$exi$fxi$gxi$hxi$ixi$jxi~PJyO#}ji$Oji$kjifji%Xji~P3UO#}!Ri$O!Ri$k!Rif!Ri%X!Ri~P3UO#}!Si$O!Si$k!Sif!Si%X!Si~P3UO#}!Ti$O!Ti$k!Tif!Ti%X!Ti~P3UO#}!Ui$O!Ui$k!Uif!Ui%X!Ui~P3UO#}!Vi$O!Vi$k!Vif!Vi%X!Vi~P3UOf#eO~P3UO$c%ZOf$bX~Of%]O~O!P%^O~Oa!eO$S|i$T|i$U|i$V|i$W|i$X|i$Y|i$[|i$]|i$_|i$`|i$a|i%S|i%U|i%W|if|i$c|i!P|i%X|i~O$e|i$f|i$g|i$h|i$i|i$j|i%T|i%V|i~P! oOa$UO!P$oP~P!qO$l!WX~P3UO$l%cO~Oa!eO$d!dO%X|Xf|X~Oa$nO%X[if[i~Oa$nO$m%gO%X!Yif!Yi~Oa$nO%X!^if!^i~OT%iO~O!d%kO~O$m%mO~Of%nO#}xO$OyO~Of%oO#}xO$OyO~Of%oO~P#_O%Xua#}ua$Oua$kuafua$lua%Sua%Uua%Wua$cua!Pua~P3UO#}|a$O|a$k|a$l|a~P7SOT%|Of$pP~O!c&PO~O!c&QO~O#}xO$OyOf#^X~Of&SO~O%X&TO~O#}xO$OyOf#mX~Of&UO~O$c%ZOf$ba~O$c&XO!P$oX~O!P&ZO~O!P&^O~Oa$nO%X[qf[q~Oe!bO~Oa&`O~O$U'qO$V'rO$W'sO$X'tO$Y'uO#}li$Oli$kli$lli~P9]O$U'qO$V'rO$W'sO$X'tO$Y'uO#}mi$Omi$kmi$lmi~P;QO$V'rO#}ni$Oni$kni$lni~P<uO$V'rO#}pi$Opi$kpi$lpi~P>jO$V'rO#}qi$Oqi$kqi$lqi~P@_O$V'rO#}ri$Ori$kri$lri~PBSO$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO$`'yO$a'zO#}si$Osi$ksi$lsi~PCwO$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO$['vO$_'xO$`'yO$a'zO~O$]ti%Xti#}ti$Oti$ktifti$lti%Sti%Uti%Wti$cti!Pti~P!-eO$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO$['vO$`'yO$a'zO~O$]vi$_vi%Xvi#}vi$Ovi$kvifvi$lvi%Svi%Uvi%Wvi$cvi!Pvi~P!/SO$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO#}wi$Owi$kwi$lwi~PIUO$S'oO$T'pO$U'qO$V'rO$W'sO$X'tO$Y'uO#}xi$Oxi$kxi$lxi~PJyO#}|i$O|i$k|i$l|i~P! oO$c&bOf$pX!P$pX~Of&dO~O!e#yP~P]O!c&iO~O!c&lO~P6UO!c&rO~P6UO$c&XO!P$oa~O%S!XX%U!XX%W!XXf!XX$c!XX!P!XX%X!XX~P3UOT%|O!P$pP~OT&wO~O$c&bOf$pa!P$pa~O!e&yO~O!e&zO~O%X&|O~O#a'POT#[yU#[yY#[y]#[ye#[y!Q#[y!Z#[y!_#[y!|#[y#O#[y#Q#[y#S#[y#X#[y#]#[y#e#[y#l#[y#v#[y$P#[y$^#[y%O#[y!e#[y~O#}xO$OyO%X#gX~O%X'QO~O%X'RO~O!P'UO~O!e'VO~O!e'WO~O!c'ZO~P6UO!e'_O~O!e'`O~O%X'aO~Of'dO~O!e'eO~O!c'hO~P6UO%X'jO~O!e'mO~O",
  goto: "@q%_PPPP%`PPPP%`PP%`PPP%qP%{&w'sPP's's's's(x*s*s*s*s*s*s*s,n,n,n,n,n,n.i0m0s0v2y3RPP's's's's's3`3c%`P3f3n%`P%`P3qPPP%`3t3t3t3t3t3t3t3t3t4V4V4V4V4V4V%`%`%`%`%`%`P%`P%`P4hP4s4|5P4hPP5S4hP5Y5]5`P5c5f4hP5i5l5o5r5u4hP5x5{6O6R6`6r6x7a7gPPP7m8T8r:hPPP<P(xPPPPPPP(xPPPPPP?jPPPPPPPPPPP?m@P@S%`PPPPPPPPP%`PPPPPPPPPPPP@Y@e@h@k@nobOf#b&P&Q&S&U&i&l&r'P'Q'Z'd'ha$o#T#V#W$p$q$r$t%f!s]Of!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y#O#b$S$U$n$s%Z%g&P&Q&S&U&X&i&l&r'P'Q'Z'd'h!s[Of!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y#O#b$S$U$n$s%Z%g&P&Q&S&U&X&i&l&r'P'Q'Z'd'h#VZOPRfxy!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y#O#Y#Z#a#b#c$S$U$n$s%Z%g&P&Q&S&T&U&X&i&l&r'P'Q'Z'd'h$qXOPRUfoxy|}!O!P!Q!R!S!T!U!V!W!X!Y!Z![!]!^!_!`!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y!z#O#Y#Z#a#b#c$S$U$n$s%Z%c%g&P&Q&S&T&U&X&i&l&r'P'Q'Z'd'h'n'o'p'q'r's't'u'v'w'x'y'z$qTOPRUfoxy|}!O!P!Q!R!S!T!U!V!W!X!Y!Z![!]!^!_!`!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y!z#O#Y#Z#a#b#c$S$U$n$s%Z%c%g&P&Q&S&T&U&X&i&l&r'P'Q'Z'd'h'n'o'p'q'r's't'u'v'w'x'y'z$qVOPRUfoxy|}!O!P!Q!R!S!T!U!V!W!X!Y!Z![!]!^!_!`!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y!z#O#Y#Z#a#b#c$S$U$n$s%Z%c%g&P&Q&S&T&U&X&i&l&r'P'Q'Z'd'h'n'o'p'q'r's't'u'v'w'x'y'z$pXOPRUfoxy|}!O!P!Q!R!S!T!U!V!W!X!Y!Z![!]!^!_!`!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y!z#O#Y#Z#a#b#c$S$U$n$s%Z%c%g&P&Q&S&T&U&X&i&l&r'P'Q'Z'd'h'n'o'p'q'r's't'u'v'w'x'y'zQ%j$uQ%l$wR&a%mX!cWw#]%iR$O!b$QXPRUoxy|}!O!P!Q!R!S!T!U!V!W!X!Y!Z![!]!^!_!`!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y!z#O#Y#Z#a#c$S$U$n$s%Z%c%g&T&X'n'o'p'q'r's't'u'v'w'x'y'znYOf#b&P&Q&S&U&i&l&r'P'Q'Z'd'hQ$j!|R$k!}S!hWwT%O#]$ig!fWw!g!h#]#f$T$i$}%O%{R$h!zR&]%c]$V!i$S$U$s%g&XR%b$UR$x#Xo^Of#b&P&Q&S&U&i&l&r'P'Q'Z'd'ho`Of#b&P&Q&S&U&i&l&r'P'Q'Z'd'hccOf&P&Q&i&l&r'Z'hQ%Q#^Q%R#_R&R%SR&O%PR&f&PQ&h&QR&{&iR%U#aR&k&SR'O&lR'Y'PR'c'ZR%W#bR&o&TR'^'QR'g'dR'l'hR%Y#cR&q&UR'T&r`fO&P&Q&i&l&r'Z'hR#QfQ$p#TQ$r#VQ$t#WW%e$p$r$t%fR%f$qQ%[#|R&W%[Q!gWQ#fwY$R!g#f$T$}%{Q$T!hS$}#]$iR%{%OQ&Y%`R&u&YQ&c%|R&x&cQgOQ&e&PS&g&Q&iQ&}&lQ'S&rQ'b'ZR'k'hbdOf&P&Q&i&l&r'Z'hQ%V#bQ&j&SQ&p&UQ'X'PQ']'QR'f'dnaOf#b&P&Q&S&U&i&l&r'P'Q'Z'd'hQ#|!bQ$Q!e[$V!i$S$U$s%g&XQ$X!jQ$Y!kQ$Z!lQ$[!mQ$]!nQ$^!oQ$_!pQ$`!sQ$a!tQ$b!uQ$c!vQ$d!wQ$e!xQ$f!yQ$l#OQ%d$nR&V%Z!rQOf!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y#O#b$S$U$n$s%Z%g&P&Q&S&U&X&i&l&r'P'Q'Z'd'hQuPQzRQ#gxQ#hyQ$y#YQ$z#ZQ%T#aQ%X#cR&n&T!rSOf!b!e!i!j!k!l!m!n!o!p!s!t!u!v!w!x!y#O#b$S$U$n$s%Z%g&P&Q&S&U&X&i&l&r'P'Q'Z'd'hQvP^{Rxy#Y#a#c&TQ!aUQ#[oQ#i|Q#j}Q#k!OS#l!P'rQ#m!QQ#n!RQ#o!SQ#p!TQ#q!UQ#r!VQ#s!WQ#t!XQ#u!YQ#v!ZQ#w![Q#x!]Q#y!^Q#z!_Q#{!`Q$g!zQ${#ZQ$|'nQ%p'oQ%q'pQ%r'qQ%s'sQ%t'tQ%u'uQ%v'vQ%w'wQ%x'xQ%y'yQ%z'zR&[%cR#}!bQ$W!iQ%_$SQ%`$UQ%h$sQ&_%gR&t&XR%a$UQ%}%PR&v&`ceOf&P&Q&i&l&r'Z'hR&m&SR'['PR'i'dR&s&U",
  nodeNames: "⚠ LineComment BlockComment Circuit Pragma Identifier pragma circom CompilerVersion Include include String SignalDeclaration signal input output ArraySize OpenBracket Conditional Condition BooleanExpressionGroup OpenParen CloseParen BooleanAnd BooleanOr BooleanNegation LT NumericExpressionGroup Addition Subtraction Multiplication Exponentiation Division Quotient Remainder BitwiseAnd BitwiseOr BitwiseComplement ExclusiveOr RightShift LeftShift Call ParameterValueList ParameterValues Value Signal ArrayIndex CloseBracket Number LTE GT GTE EQ NEQ TrueValue FalseValue VariableDeclaration var Array Items ComponentDeclaration component MainComponentDeclaration main PublicSignalsList OpenBrace public CloseBrace Assignment AdditionAssignment SubtractionAssignment MultiplicationAssignment ExponentiationAssignment DivisionAssignment QuotientAssignment RemainderAssignment Increment Decrement BitwiseAndAssignment BitwiseOrAssignment BitwiseComplementAssignment ExclusiveOrAssignment RightShiftAssignment LeftShiftAssignment AssignSignalRight AssignSignalLeft AssignConstraintSignalRight AssignConstraintSignalLeft ConstrainSignal Assert assert Log log Return return FunctionDeclaration function ParameterList Parameters FunctionBody TemplateDeclaration template parallel TemplateBody If if IfCondition IfBody IfBody else ElseBody ElseBody ForLoop for ForLoopInitialization ForLoopCondition ForLoopStepCode ForLoopBody ForLoopBody WhileLoop while WhileLoopCondition WhileLoopBody WhileLoopBody",
  maxTerm: 198,
  nodeProps: [
    [NodeProp.group, -15,4,9,12,56,60,62,68,84,85,86,87,88,89,91,93,"Statement",-5,18,27,41,44,48,"NumericExpression",-10,20,23,24,25,26,49,50,51,52,53,"BooleanExpression",-7,28,29,30,31,32,33,34,"ArithmeticOperation NumericExpression",-6,35,36,37,38,39,40,"BitwiseOperation NumericExpression",-9,69,70,71,72,73,74,75,76,77,"ArithmeticAssignment Statement",-6,78,79,80,81,82,83,"BitwiseAssignment Statement",-5,95,100,104,112,119,"Block"],
    [NodeProp.closedBy, 17,"CloseBracket",21,"CloseParen",65,"CloseBrace"],
    [NodeProp.openedBy, 22,"OpenParen",47,"OpenBracket",67,"OpenBrace"]
  ],
  skippedNodes: [0,1,2],
  repeatNodeCount: 6,
  tokenData: "0T~RqXY#YYZ#Ypq#Yqr#hrs#uuv&Rvw&`xy&uyz&zz{'P{|'n|}(T}!O(Y!O!P(w!P!Q(|!Q![*a![!]+Z!]!^+`!^!_+e!_!`,j!`!a-X!a!b-v!c!}-{!}#O.a#O#P.f#P#Q.s#Q#R.x#R#S-{#T#o-{#o#p/V#p#q/[#q#r/q#r#s/v~#_R#x~XY#YYZ#Ypq#YR#mP$PP!_!`#pQ#uO$jQ~#xUpq#uqr#urs$[s#O#u#O#P$a#P~#u~$aOZ~~$dXrs#u!P!Q#u#O#P#u#U#V#u#Y#Z#u#b#c#u#f#g#u#h#i#u#i#j%P~%SR!Q![%]!c!i%]#T#Z%]~%`R!Q![%i!c!i%i#T#Z%i~%lR!Q![%u!c!i%u#T#Z%u~%xR!Q![#u!c!i#u#T#Z#u~&WP$Y~!_!`&Z~&`O$x~~&eQ$[~vw&k!_!`&p~&pO#}~~&uO$|~~&zOe~~'POf~~'UQ$U~z{'[!_!`'i~'aP$V~!_!`'d~'iO$u~~'nO$t~~'sQ$S~{|'y!_!`(O~(OO$y~~(TO$r~~(YO$c~~(_Q$T~}!O(e!_!`(r~(jP$z~!`!a(m~(rO%S~~(wO$s~~(|O$d~~)RR$W~z{)[!P!Q*P!_!`*[~)_ROz)[z{)h{~)[~)kTOz)[z{)h{!P)[!P!Q)z!Q~)[~*POQ~~*UQP~OY*PZ~*P~*aO$v~R*fQ!QP!O!P*l!Q![*aQ*oP!Q![*rQ*uQ!O!P*{!Q![*rQ+OP!Q![+RQ+WPWQ!Q![+R~+`O$l~~+eO%X~~+jR$e~}!O+s!^!_,O!_!`,]~+vP}!O+y~,OO%T~~,TP$a~!_!`,W~,]O%R~~,bP$f~!_!`,e~,jO%V~~,oP$m~!_!`,r~,wQ$i~!_!`,}!`!a-S~-SO%W~~-XO%U~~-^Q$g~!_!`-d!`!a-i~-iO$h~~-nP$`~!_!`-q~-vO%Q~~-{O$k~~.QTT~tu-{!Q![-{!c!}-{#R#S-{#T#o-{~.fOa~~.kP$X~!_!`.n~.sO$w~~.xO!P~~.}P$_~!_!`/Q~/VO%P~~/[O!c~~/aQ$]~!_!`/g#p#q/l~/lO$}~~/qO$O~~/vO!e~~/{P$^~!_!`0O~0TO%O~",
  tokenizers: [0, 1],
  topRules: {"Circuit":[0,3]},
  specialized: [{term: 5, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
})